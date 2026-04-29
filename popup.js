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
    const fillButton = document.getElementById('fillForm');
    const selectedProfile = select.value;
    const statusDiv = document.getElementById('status');

    if (fillButton.disabled) {
        return;
    }
    
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
    fillButton.disabled = true;
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || !tabs[0]) {
            statusDiv.textContent = '❌ Ошибка: активная вкладка не найдена';
            statusDiv.style.color = '#f44336';
            fillButton.disabled = false;
            return;
        }

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

            fillButton.disabled = false;
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
async function fillForm(formData, profileName) {
    console.log("╔════════════════════════════════════════════════════════════╗");
    console.log("║  МИС БАРС - Автоматическое назначение анализов           ║");
    console.log("║  Разработчик: MorozovRV                                   ║");
    console.log("║  Версия: 2.0                                              ║");
    console.log("╚════════════════════════════════════════════════════════════╝");
    console.log(`=== Автозаполнение: профиль "${profileName}" ===`);
    
    let filledCount = 0;

    const CHECKBOX_SELECTOR = 'input[name="GridResearch_SelectList_Item"]';
    const TARGET_PAGE_SIZE = 150;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const getCheckboxes = () => Array.from(document.querySelectorAll(CHECKBOX_SELECTOR));

    const normalizeText = (value) => String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();

    const getElementLabel = (element) => normalizeText([
        element.textContent,
        element.value,
        element.title,
        element.getAttribute('aria-label')
    ].filter(Boolean).join(' '));

    const clickElement = (element, useDoubleClick = true) => {
        element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
        element.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
        element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        if (useDoubleClick) {
            element.dispatchEvent(new MouseEvent('dblclick', { bubbles: true, cancelable: true, view: window }));
        }
    };

    const isVisible = (element) => {
        if (!element || !element.isConnected) {
            return false;
        }

        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);

        return rect.width > 0
            && rect.height > 0
            && style.display !== 'none'
            && style.visibility !== 'hidden'
            && style.opacity !== '0';
    };

    const dispatchValueEvents = (element) => {
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
        element.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13
        }));
        element.dispatchEvent(new KeyboardEvent('keypress', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13
        }));
        element.dispatchEvent(new KeyboardEvent('keyup', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13
        }));
        element.blur();
    };

    const isPagerArea = (element, root) => {
        const rect = element.getBoundingClientRect();
        const rootRect = root === document.body
            ? { top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight, width: window.innerWidth, height: window.innerHeight }
            : root.getBoundingClientRect();

        const inRoot = rect.left >= rootRect.left - 20
            && rect.right <= rootRect.right + 20
            && rect.top >= rootRect.top - 20
            && rect.bottom <= rootRect.bottom + 80;

        const rootHeight = Math.max(rootRect.height, window.innerHeight);
        const rootWidth = Math.max(rootRect.width, window.innerWidth);
        const inBottomPart = rect.top >= rootRect.top + rootHeight * 0.35 || rect.bottom >= window.innerHeight * 0.5;
        const inRightPart = rect.left >= rootRect.left + rootWidth * 0.3;

        return inRoot && inBottomPart && inRightPart;
    };

    const waitForRowsReload = async (previousCount) => {
        const startedAt = Date.now();

        while (Date.now() - startedAt < 7000) {
            await sleep(250);

            const currentCount = getCheckboxes().length;
            if (currentCount >= 100 || currentCount > previousCount) {
                return currentCount;
            }
        }

        return getCheckboxes().length;
    };

    const waitForCheckboxesToSettle = async () => {
        const startedAt = Date.now();
        let lastCount = getCheckboxes().length;
        let stableSince = Date.now();

        while (Date.now() - startedAt < 7000) {
            await sleep(250);

            const currentCount = getCheckboxes().length;
            if (currentCount !== lastCount) {
                lastCount = currentCount;
                stableSince = Date.now();
            }

            if (currentCount > 0 && Date.now() - startedAt >= 1200 && Date.now() - stableSince >= 500) {
                return currentCount;
            }
        }

        return getCheckboxes().length;
    };

    const setInputValue = async (input, value) => {
        input.focus();

        const valuePrototype = input instanceof window.HTMLTextAreaElement
            ? window.HTMLTextAreaElement.prototype
            : window.HTMLInputElement.prototype;
        const nativeSetter = Object.getOwnPropertyDescriptor(valuePrototype, 'value')?.set;
        if (nativeSetter) {
            nativeSetter.call(input, String(value));
        } else {
            input.value = String(value);
        }

        dispatchValueEvents(input);
        await sleep(150);
    };

    const setSelectValue = async (select, value) => {
        const targetOption = Array.from(select.options).find((option) => {
            const optionValue = option.value.trim();
            const optionText = option.textContent.trim();
            return optionValue === String(value) || optionText === String(value);
        });

        if (!targetOption) {
            return false;
        }

        select.value = targetOption.value;
        dispatchValueEvents(select);
        await sleep(150);
        return true;
    };

    const setEditableText = async (element, value) => {
        element.focus();

        if (element.isContentEditable) {
            element.textContent = String(value);
        } else {
            element.click();
            await sleep(150);

            const active = document.activeElement;
            if (active && active !== element && /^(INPUT|TEXTAREA)$/i.test(active.tagName)) {
                await setInputValue(active, value);
                return true;
            }

            element.textContent = String(value);
        }

        dispatchValueEvents(element);
        await sleep(150);
        return true;
    };

    const openAllResearches = async () => {
        const candidates = Array.from(document.querySelectorAll('button, a, span, div, td, input[type="button"], input[type="submit"]'))
            .filter((element) => {
                const label = getElementLabel(element);

                return isVisible(element)
                    && label.includes('все исследования')
                    && element.querySelectorAll(CHECKBOX_SELECTOR).length === 0;
            })
            .sort((left, right) => {
                const leftLabel = getElementLabel(left);
                const rightLabel = getElementLabel(right);
                const leftExact = leftLabel === 'все исследования' ? 10000 : 0;
                const rightExact = rightLabel === 'все исследования' ? 10000 : 0;
                const leftTag = /^(BUTTON|A|INPUT)$/i.test(left.tagName) ? 1000 : 0;
                const rightTag = /^(BUTTON|A|INPUT)$/i.test(right.tagName) ? 1000 : 0;

                return (rightExact + rightTag - rightLabel.length) - (leftExact + leftTag - leftLabel.length);
            });

        const target = candidates[0];
        if (!target) {
            console.warn('Кнопка "Все исследования" не найдена. Продолжаю с текущим списком.');
            return { clicked: false, count: getCheckboxes().length };
        }

        clickElement(target, false);
        const count = await waitForCheckboxesToSettle();
        console.log(`Открыт раздел "Все исследования". Текущих чек-боксов: ${count}`);

        return { clicked: true, count };
    };

    const trySetPageSizeTo150 = async () => {
        const currentCount = getCheckboxes().length;

        if (currentCount >= 100) {
            return { changed: false, reason: 'already_full', count: currentCount };
        }

        const root = document.body;
        const pageSizes = new Set(['5', '10', '15', '20', '25', '30', '50', '100']);
        const currentCountText = String(currentCount);
        const editableSelector = 'input[type="number"], input[type="text"], input:not([type]), textarea, [contenteditable="true"]';
        const isPotentialPageSizeInput = (input, allowEmpty = false) => {
            const value = 'value' in input ? String(input.value).trim() : input.textContent.trim();
            const marker = `${input.id || ''} ${input.name || ''} ${input.className || ''} ${input.getAttribute('aria-label') || ''}`;
            const hasPageSizeMarker = /pagesize|page-size|size|row|limit|count|record|perpage|per-page|запис|строк|размер|колич/i.test(marker);

            return isVisible(input)
                && !input.disabled
                && !input.readOnly
                && isPagerArea(input, root)
                && (pageSizes.has(value) || hasPageSizeMarker || (allowEmpty && value === ''));
        };

        const selects = Array.from(root.querySelectorAll('select'))
            .filter((select) => isVisible(select) && !select.disabled && isPagerArea(select, root));

        for (const select of selects) {
            if (await setSelectValue(select, TARGET_PAGE_SIZE)) {
                const count = await waitForRowsReload(currentCount);
                return { changed: count > currentCount, reason: 'select', count };
            }
        }

        const inputs = Array.from(root.querySelectorAll('input[type="number"], input[type="text"], input:not([type])'))
            .filter((input) => isPotentialPageSizeInput(input));

        for (const input of inputs) {
            await setInputValue(input, TARGET_PAGE_SIZE);
            const count = await waitForRowsReload(currentCount);

            if (count > currentCount) {
                return { changed: true, reason: 'input', count };
            }
        }

        const clickableElements = Array.from(root.querySelectorAll('button, span, div, a, td'))
            .filter((element) => {
                const text = element.textContent.trim();
                const marker = `${element.title || ''} ${element.getAttribute('aria-label') || ''} ${element.className || ''}`;
                const isRecordsControl = /запис|record|row|pagesize|page-size/i.test(marker);

                return isVisible(element)
                    && isPagerArea(element, root)
                    && (pageSizes.has(text) || text === currentCountText || isRecordsControl)
                    && element.querySelectorAll(CHECKBOX_SELECTOR).length === 0;
            })
            .sort((left, right) => {
                const leftRect = left.getBoundingClientRect();
                const rightRect = right.getBoundingClientRect();
                const leftMarker = `${left.title || ''} ${left.getAttribute('aria-label') || ''} ${left.className || ''}`;
                const rightMarker = `${right.title || ''} ${right.getAttribute('aria-label') || ''} ${right.className || ''}`;
                const leftPriority = /запис|record|row|pagesize|page-size/i.test(leftMarker) ? 10000 : 0;
                const rightPriority = /запис|record|row|pagesize|page-size/i.test(rightMarker) ? 10000 : 0;

                return (rightPriority + rightRect.bottom + rightRect.right) - (leftPriority + leftRect.bottom + leftRect.right);
            });

        for (const element of clickableElements) {
            const knownVisibleEditors = new Set(Array.from(document.querySelectorAll(editableSelector)).filter(isVisible));
            clickElement(element);
            await sleep(200);

            const active = document.activeElement;
            if (active && /^(INPUT|TEXTAREA)$/i.test(active.tagName) && isPotentialPageSizeInput(active, true)) {
                await setInputValue(active, TARGET_PAGE_SIZE);
            } else {
                const editor = Array.from(document.querySelectorAll(editableSelector))
                    .filter((candidate) => isPotentialPageSizeInput(candidate, true))
                    .find((candidate) => !knownVisibleEditors.has(candidate));

                if (!editor) {
                    continue;
                }

                if (/^(INPUT|TEXTAREA)$/i.test(editor.tagName)) {
                    await setInputValue(editor, TARGET_PAGE_SIZE);
                } else {
                    await setEditableText(editor, TARGET_PAGE_SIZE);
                }
            }

            const count = await waitForRowsReload(currentCount);
            if (count > currentCount) {
                return { changed: true, reason: 'clickable', count };
            }
        }

        return { changed: false, reason: 'not_found', count: getCheckboxes().length };
    };
    
    await openAllResearches();

    // Проверяем количество чек-боксов
    let allCheckboxes = getCheckboxes();
    console.log(`Найдено чек-боксов: ${allCheckboxes.length}`);

    const pageSizeResult = await trySetPageSizeTo150();
    if (pageSizeResult.changed) {
        console.log(`Количество записей автоматически переключено на ${TARGET_PAGE_SIZE}. Текущих чек-боксов: ${pageSizeResult.count}`);
        allCheckboxes = getCheckboxes();
    } else if (pageSizeResult.reason === 'not_found') {
        console.warn('Не удалось автоматически найти переключатель количества записей.');
    }
    
    // Если найдено меньше 100 записей, показываем предупреждение
    if (allCheckboxes.length < 100) {
        const warningMsg = `⚠️ Внимание! Найдено только ${allCheckboxes.length} анализов. Автоматически выставить 150 записей не удалось. Установите отображение 150 записей вручную (нажмите на цифру в правом нижнем углу, введите 150 и нажмите Enter).`;
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
