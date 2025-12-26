let state = {
    count: 0,
    lastUpdated: new Date().toLocaleTimeString()
};

const rootElement = document.getElementById('app');

// 3️⃣ تابع نمایش state (برای دیدن تغییرات)
function updateStateView() {
    document.getElementById('state-view').textContent = 
        JSON.stringify(state, null, 2);
}

function setState(newPartialState) {
    console.log('🔵 setState فراخوانی شد:', newPartialState);
    
    // 1. state را عوض کن
    state = { ...state, ...newPartialState };
    state.lastUpdated = new Date().toLocaleTimeString();
    
    console.log('🟢 state جدید:', state);
    
    // 2. **سیستم خودش** UI را آپدیت می‌کند
    renderApp();
    
    // 3. نمایش state برای دیدن تغییرات
    updateStateView();
}