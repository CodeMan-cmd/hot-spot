// 当所有资源加载完成后执行
window.onload = function () {
  // 模拟加载慢的效果，延迟3秒（3000毫秒）
  setTimeout(function () {
    document.getElementById("loadingScreen").style.display = "none"; // 隐藏加载屏幕
    document.getElementById("app").style.display = "flex"; // 显示内容
  }, 500);
};

let startY;
let isPulling = false;

// 监听触摸开始事件
document.addEventListener("touchstart", function (event) {
  // 仅当页面滚动到顶部时记录触摸开始位置
  if (window.scrollY === 0) {
    startY = event.touches[0].clientY; // 记录触摸开始的位置
  } else {
    startY = null; // 页面未滚动到顶部，不记录
  }
});

// 监听触摸移动事件
document.addEventListener("touchmove", function (event) {
  const currentY = event.touches[0].clientY; // 获取当前触摸位置

  // 检测上下拉动作，且仅在页面滚动到顶部时生效
  if (startY !== null && currentY - startY > 50 && !isPulling) {
    // 向下拉
    isPulling = true;
    document.getElementById("loadingScreen").style.display = "flex"; // 显示加载动画
    setTimeout(function () {
      location.reload(); // 刷新页面
    }, 1000); // 1秒后刷新
  }
});

// 监听触摸结束事件
document.addEventListener("touchend", function () {
  isPulling = false; // 重置拉动状态
});
