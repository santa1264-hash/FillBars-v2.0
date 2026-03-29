// ==============================================
// 1. НАСТРОЙКА ПРОФИЛЕЙ
// ==============================================

// Базовые анализы, которые добавляются во все профили
const BASE_ANALYSES = {
    "95436220": true,   // Общий (клинический) анализ крови развернутый
    "95435802": true,   // Общий (клинический) анализ мочи
    "14184231485": true, // Определение основных групп по системе AB0
    "14184265605": true, // Определение антигена D системы Резус (резус-фактор)
};

const PROFILES = {
    // ========== ОСНОВНЫЕ ПРОФИЛИ ==========
    "🔴 Острый панкреатит": {
        ...BASE_ANALYSES,
        "97829568": true,   // Креатинин
        "97830130": true,   // Мочевина
        "97830039": true,   // Амилаза
        "97830108": true,   // Глюкоза
        "97829747": true,   // АСАТ
        "97829731": true,   // АЛАТ
        "97829604": true,   // Холестерин
        "97829650": true,   // Общий белок
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "97829683": true,   // Общий билирубин
        "97829833": true,   // Свободный билирубин
        "97829795": true,   // Щелочная фосфатаза
        "141778961": true,  // HBsAg (гепатит B)
        "141779417": true,  // Антитела к гепатиту C
        "1329757354": true, //	'Кровь на RW'
    },
    
    "🟠 Острый аппендицит": {
        ...BASE_ANALYSES,
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "97830039": true,   // Амилаза
        "97829683": true,   // Общий билирубин
        "97829833": true,   // Свободный билирубин
        "97829568": true,   // Креатинин
        "97830108": true,   // Глюкоза
        "97830130": true,   // Мочевина
        "97829747": true,   // АСАТ
        "97829731": true,   // АЛАТ
        "1329757354": true, //	'Кровь на RW'
    },
    
    "🟡 Острый холецистит": {
        ...BASE_ANALYSES,
        "97829683": true,   // Общий билирубин
        "97829833": true,   // Свободный билирубин
        "97829795": true,   // Щелочная фосфатаза
        "97829747": true,   // АСАТ
        "97829731": true,   // АЛАТ
        "97830039": true,   // Амилаза
        "97829568": true,   // Креатинин
        "97830108": true,   // Глюкоза
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "97830130": true,   // Мочевина
        "97829604": true,   // Холестерин
        "141778961": true,  // HBsAg (гепатит B)
        "141779417": true,  // Антитела к гепатиту C
        "1329757354": true, //	'Кровь на RW'
    },
    
    "🫁 Гнойные заболевания легкие": {
        ...BASE_ANALYSES,
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "97829568": true,   // Креатинин
        "97830108": true,   // Глюкоза
        "97830130": true,   // Мочевина
        "97829650": true,   // Общий белок
        "1329757354": true, //	'Кровь на RW'
    },
    
    "⚠️ Гнойные заболевания тяжелые (сепсис)": {
        ...BASE_ANALYSES,
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "97829683": true,   // Общий билирубин
        "97829833": true,   // Свободный билирубин
        "97829568": true,   // Креатинин
        "97830108": true,   // Глюкоза
        "97830130": true,   // Мочевина
        "97829779": true,   // ЛДГ
        "97829650": true,   // Общий белок
        "15091223625": true, // Прокальцитонин
        "97830039": true,   // Амилаза
        "97829747": true,   // АСАТ
        "97829731": true,   // АЛАТ
        "14767125442": true, // Фибриноген
        "14767132987": true, // Д-димер
        "14767094583": true, // Протромбиновое время
        "14767110898": true, // МНО
        "14767140828": true, // АЧТВ
        "141778961": true,  // HBsAg (гепатит B)
        "141779417": true,  // Антитела к гепатиту C
        "1329757354": true, //	'Кровь на RW'
    },
    
    "🏥 На плановую операцию": {
        ...BASE_ANALYSES,
        "95436325": true,   // СОЭ
        "97829683": true,   // Общий билирубин
        "97829833": true,   // Свободный билирубин
        "97830039": true,   // Амилаза
        "97829568": true,   // Креатинин
        "97830130": true,   // Мочевина
        "97830108": true,   // Глюкоза
        "97829650": true,   // Общий белок
        "97829604": true,   // Холестерин
        "97829747": true,   // АСАТ
        "97829731": true,   // АЛАТ
        "97830076": true,   // СРБ
        "14767094583": true, // Протромбиновое время
        "14767110898": true, // МНО
        "14767125442": true, // Фибриноген
        "14767140828": true, // АЧТВ
        "95436201": true,   // Время свертывания крови
        "141778961": true,  // HBsAg (гепатит B)
        "141779417": true,  // Антитела к гепатиту C
        "1329757354": true, //	'Кровь на RW'
    },
    
    "⭐ Мой стандартный набор": {
        ...BASE_ANALYSES,
        "97829568": true,   // Креатинин
        "97830130": true,   // Мочевина
        "97830108": true,   // Глюкоза
        "97829683": true,   // Общий билирубин
        "97829833": true,   // Свободный билирубин
        "97830039": true,   // Амилаза
        "97829650": true,   // Общий белок
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "97829747": true,   // АСАТ
        "97829731": true,   // АЛАТ
        "141778961": true,  // HBsAg (гепатит B)
        "141779417": true,  // Антитела к гепатиту C
        "1329757354": true, //	'Кровь на RW'
    },
    
    // ========== ДОПОЛНИТЕЛЬНЫЕ ПРОФИЛИ ==========
    "🩸 Сахарный диабет": {
        ...BASE_ANALYSES,
        "97830108": true,   // Глюкоза
        "14767261869": true, // Гликированный гемоглобин
        "97829568": true,   // Креатинин
        "97830092": true,   // Триглицериды
        "97829604": true,   // Холестерин
        "97829634": true,   // Холестерин ЛПВП
        "97829667": true,   // Холестерин ЛПНП
        "14767250385": true, // Глюкозотолерантный тест
    },
    
    "❤️ Сердечно-сосудистый профиль": {
        ...BASE_ANALYSES,
        "97829604": true,   // Холестерин
        "97830092": true,   // Триглицериды
        "97829634": true,   // Холестерин ЛПВП
        "97829667": true,   // Холестерин ЛПНП
        "97829747": true,   // АСАТ
        "97829731": true,   // АЛАТ
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "14767125442": true, // Фибриноген
        "14767132987": true, // Д-димер
        "14767094583": true, // Протромбиновое время
        "14767110898": true, // МНО
    },
    
    "🧪 Стандартный скрининг": {
        ...BASE_ANALYSES,
        "97829568": true,   // Креатинин
        "97830130": true,   // Мочевина
        "97830108": true,   // Глюкоза
        "97829683": true,   // Общий билирубин
        "97829604": true,   // Холестерин
        "97829650": true,   // Общий белок
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "97829779": true,   // ЛДГ
    },
    
    "🦠 Вирусные гепатиты": {
        ...BASE_ANALYSES,
        "141778961": true,  // HBsAg (гепатит B)
        "141779417": true,  // Антитела к гепатиту C
        "141778945": true,  // Антитела IgM, IgG к HCV
        "141779806": true,  // Core-антиген HCV
        "97829747": true,   // АСАТ
        "97829731": true,   // АЛАТ
        "97829683": true,   // Общий билирубин
        "97829833": true,   // Свободный билирубин
        "97830076": true,   // СРБ
    },
    
    "🧬 Функция щитовидной железы": {
        ...BASE_ANALYSES,
        "141779899": true,  // ТТГ
        "141779922": true,  // Свободный Т4
        "97829849": true,   // Мочевая кислота
        "97829568": true,   // Креатинин
        "97829604": true,   // Холестерин
    },
    
    "🩸 Анемия": {
        ...BASE_ANALYSES,
        "97829865": true,   // Железо сыворотки
        "97829699": true,   // Трансферрин
        "97829715": true,   // Ферритин
        "95436349": true,   // Ретикулоциты
        "97829683": true,   // Общий билирубин
        "97829833": true,   // Свободный билирубин
    },
    
    "💊 Коагулограмма": {
        ...BASE_ANALYSES,
        "14767094583": true, // Протромбиновое время
        "14767110898": true, // МНО
        "14767125442": true, // Фибриноген
        "14767132987": true, // Д-димер
        "14767140828": true, // АЧТВ
        "95436201": true,   // Время свертывания крови
    },
    
    "🔬 Ревматологический скрининг": {
        ...BASE_ANALYSES,
        "95436325": true,   // СОЭ
        "97830076": true,   // СРБ
        "97829946": true,   // Ревматоидный фактор
        "19204896712": true, // Антистрептолизин О
        "12849900445": true, // Антитела к кардиолипину
    },
};
// ==============================================

// Заполняем выпадающий список профилями
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('profileSelect');
    
    while (select.options.length > 1) {
        select.remove(1);
    }
    
    for (const profileName in PROFILES) {
        const option = document.createElement('option');
        option.value = profileName;
        option.textContent = profileName;
        select.appendChild(option);
    }
    
    const savedProfile = localStorage.getItem('lastSelectedProfile');
    if (savedProfile && PROFILES[savedProfile]) {
        select.value = savedProfile;
    }
});

// Обработчик кнопки "Заполнить форму"
document.getElementById('fillForm').addEventListener('click', () => {
    const select = document.getElementById('profileSelect');
    const selectedProfile = select.value;
    const statusDiv = document.getElementById('status');
    
    if (!selectedProfile) {
        statusDiv.textContent = '❌ Пожалуйста, выберите профиль';
        statusDiv.style.color = '#f44336';
        return;
    }
    
    if (!PROFILES[selectedProfile]) {
        statusDiv.textContent = '❌ Ошибка: профиль не найден';
        statusDiv.style.color = '#f44336';
        return;
    }
    
    localStorage.setItem('lastSelectedProfile', selectedProfile);
    
    const formData = PROFILES[selectedProfile];
    statusDiv.textContent = '⏳ Заполнение...';
    statusDiv.style.color = '#ff9800';
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: fillForm,
            args: [formData, selectedProfile]
        }, (results) => {
            if (chrome.runtime.lastError) {
                statusDiv.textContent = `❌ Ошибка: ${chrome.runtime.lastError.message}`;
                statusDiv.style.color = '#f44336';
            } else if (results && results[0] && results[0].result) {
                const result = results[0].result;
                statusDiv.textContent = `✅ ${result.message}`;
                statusDiv.style.color = '#4CAF50';
            } else {
                statusDiv.textContent = '✅ Заполнение выполнено';
                statusDiv.style.color = '#4CAF50';
            }
        });
    });
});

// Закрытие попапа
document.getElementById('closePopup').addEventListener('click', () => {
    window.close();
});

// ==============================================
// ФУНКЦИЯ ЗАПОЛНЕНИЯ ФОРМЫ
// ==============================================
function fillForm(formData, profileName) {
    console.log("╔════════════════════════════════════════════════════════════╗");
    console.log("║  МИС БАРС - Автоматическое назначение анализов           ║");
    console.log("║  Разработчик: MorozovRV                                   ║");
    console.log("║  Версия: 2.0                                              ║");
    console.log("╚════════════════════════════════════════════════════════════╝");
    console.log(`=== Автозаполнение: профиль "${profileName}" ===`);
    
    let filledCount = 0;
    
    // Проверяем количество чек-боксов
    const allCheckboxes = document.querySelectorAll('input[name="GridResearch_SelectList_Item"]');
    console.log(`Найдено чек-боксов: ${allCheckboxes.length}`);
    
    // Если найдено меньше 100 записей, показываем предупреждение
    if (allCheckboxes.length < 100) {
        const warningMsg = `⚠️ Внимание! Найдено только ${allCheckboxes.length} анализов. Убедитесь, что вы установили отображение 150 записей (нажмите на цифру в правом нижнем углу, введите 150 и нажмите Enter).`;
        console.warn(warningMsg);
        
        // Показываем предупреждение на странице
        const notification = document.createElement('div');
        notification.textContent = warningMsg;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #ff9800;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-family: 'Segoe UI', sans-serif;
            z-index: 9999;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            max-width: 350px;
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 8000);
    }
    
    // Проставляем чек-боксы
    allCheckboxes.forEach((checkbox) => {
        const itemValue = checkbox.getAttribute('item_value');
        
        if (itemValue && formData.hasOwnProperty(itemValue)) {
            const shouldBeChecked = formData[itemValue];
            const isChecked = checkbox.checked;
            
            if (shouldBeChecked === true && !isChecked) {
                checkbox.click();
                filledCount++;
                console.log(`✓ Отмечен анализ: ${itemValue}`);
            } else if (shouldBeChecked === false && isChecked) {
                checkbox.click();
                filledCount++;
                console.log(`✗ Снят анализ: ${itemValue}`);
            }
        }
    });
    
    const message = `Профиль "${profileName}": обработано ${filledCount} анализов (всего на странице: ${allCheckboxes.length})`;
    console.log(message);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    
    // Показываем уведомление о результате
    const notification = document.createElement('div');
    const isFullList = allCheckboxes.length >= 100;
    notification.textContent = isFullList ? `✅ ${message}` : `⚠️ ${message}\n⚠️ Для полного списка установите 150 записей!`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${isFullList ? '#4CAF50' : '#ff9800'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-family: 'Segoe UI', sans-serif;
        z-index: 9999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: fadeOut 5s ease-in-out forwards;
        max-width: 350px;
    `;
    
    const style = document.createElement('style');
    style.textContent = `@keyframes fadeOut {0%{opacity:1}70%{opacity:1}100%{opacity:0;visibility:hidden}}`;
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
    
    return { message, filledCount, totalFound: allCheckboxes.length };
}