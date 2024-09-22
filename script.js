// 定义基本的香味类型
const scents = {
    citrus: ['柑橘', '柠檬', '橙花', '薰衣草', '黑胡椒', '肉桂'],
    floral: ['茉莉', '玫瑰', '劳丹脂', '广藿香'],
    woody: ['檀香木', '雪松', '麝香', '琥珀', '香根草']
};

// 生成随机香味
function getRandomScent(type) {
    return scents[type][Math.floor(Math.random() * scents[type].length)];
}

// 提取描述中的关键词
function extractKeywords(description) {
    return description.toLowerCase().match(/\b\w+\b/g) || [];
}

// 生成香水配方
function generatePerfume(description) {
    const keywords = extractKeywords(description);

    // 根据关键词生成香味
    const topNote = getRandomScent('citrus');
    const middleNote = getRandomScent('floral');
    const baseNote = getRandomScent('woody');

    // 生成配方字符串
    const formula = `基于"${description}"的香水配方：\n` +
                    `前调：${topNote}\n` +
                    `中调：${middleNote}\n` +
                    `基调：${baseNote}`;

    return formula;
}

// 显示配方
function displayFormula(formula) {
    document.getElementById('perfume-formula').innerText = formula;
    document.getElementById('result-section').style.display = 'block';
}

// 隐藏其他部分
function hideOtherSections() {
    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('product-section').style.display = 'none';
}

// 重置表单
function resetForm() {
    document.getElementById('description').value = '';
    document.getElementById('result-section').style.display = 'none';

    // 显示其他部分
    document.getElementById('hero-section').style.display = 'block';
    document.getElementById('input-section').style.display = 'block';
    document.getElementById('product-section').style.display = 'block';
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加事件监听器
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        // 获取用户输入
        const description = document.getElementById('description').value;

        if (description.trim() === '') {
            alert('请输入描述信息！');
            return;
        }

        // 生成并显示配方
        const formula = generatePerfume(description);
        displayFormula(formula);
        hideOtherSections();
    });

    // 初始化显示部分
    document.getElementById('hero-section').style.display = 'block';
    document.getElementById('input-section').style.display = 'block';
    document.getElementById('product-section').style.display = 'block';
});