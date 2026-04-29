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

const DEFAULT_PROFILES = {
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

const PROFILE_STORAGE_KEY = 'barsCustomProfilesV2';
const DELETED_DEFAULT_PROFILES_KEY = 'barsDeletedDefaultProfilesV2';
const RESEARCH_CATALOG_STORAGE_KEY = 'barsResearchCatalogV2';
const PROFILE_ICONS = ['🔴', '🟠', '🟡', '🫁', '⚠️', '🏥', '⭐', '🩸', '❤️', '🧪', '🦠', '🧬', '💊', '🔬', '🧫', '🩺', '🚑', '📋'];
const CHECKBOX_SELECTOR = 'input[name="GridResearch_SelectList_Item"]';
const RESEARCH_MATERIAL_NAMES = new Set([
    'сыворотка крови',
    'кровь',
    'кровь венозная',
    'кровь капиллярная',
    'моча',
    'осадок мочи',
    'кал',
    'мокрота',
    'ликвор',
    'слюна',
    'гной',
    'отделяемое',
    'отделяемое из уха',
    'отделяемое влагалища',
    'отделяемое уретры',
    'отделяемое женских мочеполовых органов',
    'отделяемое из носа',
    'плазма крови бедная тромбоцитами',
    'жидкость плевральная',
    'носоглоточная слизь',
    'слизь с миндалин',
    'мазок слизистой ротоглотки',
    'соскоб'
]);
let PROFILES = loadProfiles();
let loadedResearches = loadSavedResearches();
let editingProfileName = null;
let selectedResearchIds = new Set();
let selectedProfileIcon = PROFILE_ICONS[0];

function getDefaultProfileNames() {
    return Object.keys(DEFAULT_PROFILES);
}

function readJsonStorage(key, fallbackValue) {
    try {
        const rawValue = localStorage.getItem(key);
        return rawValue ? JSON.parse(rawValue) : fallbackValue;
    } catch (error) {
        console.warn(`Не удалось прочитать настройки ${key}`, error);
        return fallbackValue;
    }
}

function writeJsonStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCustomProfiles() {
    return readJsonStorage(PROFILE_STORAGE_KEY, {});
}

function saveCustomProfiles(customProfiles) {
    writeJsonStorage(PROFILE_STORAGE_KEY, customProfiles);
}

function getDeletedDefaultProfiles() {
    return new Set(readJsonStorage(DELETED_DEFAULT_PROFILES_KEY, []));
}

function saveDeletedDefaultProfiles(deletedProfiles) {
    writeJsonStorage(DELETED_DEFAULT_PROFILES_KEY, Array.from(deletedProfiles));
}

function loadProfiles() {
    const deletedDefaultProfiles = getDeletedDefaultProfiles();
    const customProfiles = getCustomProfiles();
    const profiles = {};

    for (const profileName of getDefaultProfileNames()) {
        if (!deletedDefaultProfiles.has(profileName)) {
            profiles[profileName] = { ...DEFAULT_PROFILES[profileName] };
        }
    }

    for (const [profileName, analyses] of Object.entries(customProfiles)) {
        profiles[profileName] = { ...analyses };
    }

    return profiles;
}

function refreshProfiles() {
    PROFILES = loadProfiles();
}

function normalizeResearchName(name, researchId) {
    const normalizedName = String(name || '').replace(/\s+/g, ' ').trim();
    const lowerName = normalizedName.toLowerCase().replace(/\.$/, '');

    if (!normalizedName
        || normalizedName === `Исследование ${researchId}`
        || RESEARCH_MATERIAL_NAMES.has(lowerName)
        || /^[ab]\d{2}(?:\.\d{2,3})+(?:\.\d+)?$/i.test(lowerName)) {
        return '';
    }

    return normalizedName;
}

function getResearchCatalog() {
    const savedCatalog = readJsonStorage(RESEARCH_CATALOG_STORAGE_KEY, {});

    if (Array.isArray(savedCatalog)) {
        return savedCatalog.reduce((catalog, research) => {
            const name = normalizeResearchName(research.name, research.id);
            if (research.id && name) {
                catalog[research.id] = name;
            }
            return catalog;
        }, {});
    }

    if (!savedCatalog || typeof savedCatalog !== 'object') {
        return {};
    }

    return Object.entries(savedCatalog).reduce((catalog, [researchId, name]) => {
        const normalizedName = normalizeResearchName(name, researchId);
        if (researchId && normalizedName) {
            catalog[researchId] = normalizedName;
        }
        return catalog;
    }, {});
}

function saveResearchCatalog(catalog) {
    writeJsonStorage(RESEARCH_CATALOG_STORAGE_KEY, catalog);
}

function loadSavedResearches() {
    const catalog = getResearchCatalog();

    return Object.entries(catalog)
        .map(([id, name]) => ({ id, name }))
        .sort((left, right) => left.name.localeCompare(right.name, 'ru'));
}

function mergeResearchCatalog(researches) {
    const catalog = getResearchCatalog();

    for (const research of researches) {
        const name = normalizeResearchName(research.name, research.id);
        if (research.id && name) {
            catalog[research.id] = name;
        }
    }

    saveResearchCatalog(catalog);
    loadedResearches = loadSavedResearches();

    return loadedResearches;
}

function splitProfileTitle(profileName) {
    const parts = profileName.trim().split(/\s+/);
    const firstPart = parts[0] || PROFILE_ICONS[0];

    if (PROFILE_ICONS.includes(firstPart)) {
        return {
            icon: firstPart,
            name: parts.slice(1).join(' ') || profileName.trim()
        };
    }

    return {
        icon: PROFILE_ICONS[0],
        name: profileName.trim()
    };
}

function makeProfileTitle(icon, name) {
    return `${icon} ${name.trim()}`;
}

function setStatus(message, color = '#4CAF50') {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
    statusDiv.style.color = color;
}

function populateProfileSelect(preferredProfile = '') {
    const select = document.getElementById('profileSelect');
    const currentValue = preferredProfile || select.value || localStorage.getItem('lastSelectedProfile') || '';

    while (select.options.length > 1) {
        select.remove(1);
    }

    for (const profileName in PROFILES) {
        const option = document.createElement('option');
        option.value = profileName;
        option.textContent = profileName;
        select.appendChild(option);
    }

    if (currentValue && PROFILES[currentValue]) {
        select.value = currentValue;
    } else {
        select.value = '';
    }
}

function renderProfileManagerList() {
    const list = document.getElementById('profileManagerList');
    list.textContent = '';

    for (const profileName of Object.keys(PROFILES)) {
        const row = document.createElement('div');
        row.className = 'profile-row';

        const name = document.createElement('span');
        name.className = 'profile-row-name';
        name.textContent = profileName;

        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.className = 'small-btn';
        editButton.textContent = 'Ред.';
        editButton.addEventListener('click', () => openProfileEditor(profileName));

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'small-btn danger-mini';
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => deleteProfile(profileName));

        row.append(name, editButton, deleteButton);
        list.appendChild(row);
    }
}

function renderIconPicker() {
    const picker = document.getElementById('iconPicker');
    picker.textContent = '';

    for (const icon of PROFILE_ICONS) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = icon === selectedProfileIcon ? 'icon-choice selected' : 'icon-choice';
        button.textContent = icon;
        button.addEventListener('click', () => {
            selectedProfileIcon = icon;
            renderIconPicker();
        });
        picker.appendChild(button);
    }
}

function ensureSelectedResearchesInList() {
    const existingIds = new Set(loadedResearches.map((research) => research.id));
    const catalog = getResearchCatalog();

    for (const researchId of selectedResearchIds) {
        if (!existingIds.has(researchId)) {
            loadedResearches.push({
                id: researchId,
                name: catalog[researchId] || `Исследование ${researchId}`
            });
        }
    }

    loadedResearches.sort((left, right) => left.name.localeCompare(right.name, 'ru'));
}

function renderResearchList() {
    const list = document.getElementById('researchList');
    const counter = document.getElementById('selectedResearchCounter');
    const searchValue = document.getElementById('researchSearch').value.trim().toLowerCase();

    ensureSelectedResearchesInList();
    list.textContent = '';
    counter.textContent = `Выбрано: ${selectedResearchIds.size}`;

    const filteredResearches = loadedResearches.filter((research) => {
        const haystack = `${research.name} ${research.id}`.toLowerCase();
        return haystack.includes(searchValue);
    });

    if (filteredResearches.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.textContent = 'Исследования не найдены';
        list.appendChild(empty);
        return;
    }

    for (const research of filteredResearches) {
        const label = document.createElement('label');
        label.className = 'research-row';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = selectedResearchIds.has(research.id);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                selectedResearchIds.add(research.id);
            } else {
                selectedResearchIds.delete(research.id);
            }
            counter.textContent = `Выбрано: ${selectedResearchIds.size}`;
        });

        const text = document.createElement('span');
        text.textContent = research.name;

        label.append(checkbox, text);
        list.appendChild(label);
    }
}

function openSettingsPanel() {
    document.getElementById('settingsPanel').classList.remove('hidden');
    renderProfileManagerList();
}

function closeSettingsPanel() {
    document.getElementById('settingsPanel').classList.add('hidden');
    closeProfileEditor();
}

async function openProfileEditor(profileName = null) {
    const editor = document.getElementById('profileEditor');
    const title = document.getElementById('editorTitle');
    const nameInput = document.getElementById('profileNameInput');
    const saveButton = document.getElementById('saveProfile');

    editingProfileName = profileName;

    if (profileName) {
        const profileTitle = splitProfileTitle(profileName);
        selectedProfileIcon = profileTitle.icon;
        selectedResearchIds = new Set(Object.keys(PROFILES[profileName] || {}));
        nameInput.value = profileTitle.name;
        title.textContent = 'Редактирование профиля';
        saveButton.textContent = 'Сохранить назначение';
    } else {
        selectedProfileIcon = PROFILE_ICONS[0];
        selectedResearchIds = new Set();
        nameInput.value = '';
        title.textContent = 'Новое назначение';
        saveButton.textContent = 'Добавить назначение';
    }

    document.getElementById('researchSearch').value = '';
    editor.classList.remove('hidden');
    renderIconPicker();
    renderResearchList();

    await loadResearchesForEditor();
}

function closeProfileEditor() {
    editingProfileName = null;
    selectedResearchIds = new Set();
    document.getElementById('profileEditor').classList.add('hidden');
}

function saveProfileFromEditor() {
    const nameInput = document.getElementById('profileNameInput');
    const profileName = nameInput.value.trim();

    if (!profileName) {
        setStatus('❌ Укажите название назначения', '#f44336');
        return;
    }

    if (selectedResearchIds.size === 0) {
        setStatus('❌ Выберите хотя бы одно исследование', '#f44336');
        return;
    }

    const newTitle = makeProfileTitle(selectedProfileIcon, profileName);
    const customProfiles = getCustomProfiles();
    const deletedDefaultProfiles = getDeletedDefaultProfiles();
    const analyses = {};

    if (PROFILES[newTitle] && editingProfileName !== newTitle && !confirm(`Назначение "${newTitle}" уже существует. Заменить его?`)) {
        return;
    }

    for (const researchId of selectedResearchIds) {
        analyses[researchId] = true;
    }

    mergeResearchCatalog(loadedResearches);

    if (editingProfileName && editingProfileName !== newTitle) {
        delete customProfiles[editingProfileName];

        if (DEFAULT_PROFILES[editingProfileName]) {
            deletedDefaultProfiles.add(editingProfileName);
        }
    }

    customProfiles[newTitle] = analyses;
    saveCustomProfiles(customProfiles);
    saveDeletedDefaultProfiles(deletedDefaultProfiles);
    refreshProfiles();
    populateProfileSelect(newTitle);
    renderProfileManagerList();
    closeProfileEditor();
    setStatus(`✅ Назначение "${newTitle}" сохранено`);
}

function deleteProfile(profileName) {
    if (!confirm(`Удалить назначение "${profileName}"?`)) {
        return;
    }

    const customProfiles = getCustomProfiles();
    const deletedDefaultProfiles = getDeletedDefaultProfiles();

    delete customProfiles[profileName];

    if (DEFAULT_PROFILES[profileName]) {
        deletedDefaultProfiles.add(profileName);
    }

    saveCustomProfiles(customProfiles);
    saveDeletedDefaultProfiles(deletedDefaultProfiles);
    refreshProfiles();
    populateProfileSelect();
    renderProfileManagerList();
    closeProfileEditor();
    setStatus(`✅ Назначение "${profileName}" удалено`);
}

async function loadResearchesForEditor() {
    const loadButton = document.getElementById('loadResearches');
    const loadStatus = document.getElementById('researchLoadStatus');

    loadButton.disabled = true;
    loadStatus.textContent = 'Загрузка исследований со страницы БАРС...';

    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs || !tabs[0]) {
                loadStatus.textContent = 'Активная вкладка не найдена';
                loadButton.disabled = false;
                renderResearchList();
                resolve();
                return;
            }

            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: readResearchesFromPage
            }, (results) => {
                loadButton.disabled = false;

                if (chrome.runtime.lastError) {
                    loadStatus.textContent = `Не удалось считать исследования: ${chrome.runtime.lastError.message}`;
                    renderResearchList();
                    resolve();
                    return;
                }

                const result = results && results[0] && results[0].result;
                const pageResearches = result && Array.isArray(result.researches) ? result.researches : [];

                if (pageResearches.length) {
                    mergeResearchCatalog(pageResearches);
                } else {
                    loadedResearches = loadSavedResearches();
                }

                loadStatus.textContent = loadedResearches.length
                    ? `Загружено исследований: ${loadedResearches.length}`
                    : 'Исследования не найдены. Откройте страницу назначений в БАРС.';

                renderResearchList();
                resolve();
            });
        });
    });
}

async function readResearchesFromPage() {
    const CHECKBOX_SELECTOR = 'input[name="GridResearch_SelectList_Item"]';
    const TARGET_PAGE_SIZE = 150;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const getCheckboxes = () => Array.from(document.querySelectorAll(CHECKBOX_SELECTOR));
    const normalizeText = (value) => String(value || '').replace(/\s+/g, ' ').trim();
    const normalizeLabel = (value) => normalizeText(value).toLowerCase();

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

    const getElementLabel = (element) => normalizeLabel([
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

    const isPagerArea = (element) => {
        const rect = element.getBoundingClientRect();
        const inBottomPart = rect.top >= window.innerHeight * 0.35 || rect.bottom >= window.innerHeight * 0.5;
        const inRightPart = rect.left >= window.innerWidth * 0.3;

        return inBottomPart && inRightPart;
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

    const openAllResearches = async () => {
        const target = Array.from(document.querySelectorAll('button, a, span, div, td, input[type="button"], input[type="submit"]'))
            .filter((element) => isVisible(element)
                && getElementLabel(element).includes('все исследования')
                && element.querySelectorAll(CHECKBOX_SELECTOR).length === 0)
            .sort((left, right) => {
                const leftLabel = getElementLabel(left);
                const rightLabel = getElementLabel(right);
                const leftExact = leftLabel === 'все исследования' ? 10000 : 0;
                const rightExact = rightLabel === 'все исследования' ? 10000 : 0;

                return (rightExact - rightLabel.length) - (leftExact - leftLabel.length);
            })[0];

        if (target) {
            clickElement(target, false);
            await waitForCheckboxesToSettle();
        }
    };

    const trySetPageSizeTo150 = async () => {
        const currentCount = getCheckboxes().length;

        if (currentCount >= 100) {
            return currentCount;
        }

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
                && isPagerArea(input)
                && (pageSizes.has(value) || hasPageSizeMarker || (allowEmpty && value === ''));
        };

        const selects = Array.from(document.querySelectorAll('select'))
            .filter((select) => isVisible(select) && !select.disabled && isPagerArea(select));

        for (const select of selects) {
            if (await setSelectValue(select, TARGET_PAGE_SIZE)) {
                return waitForRowsReload(currentCount);
            }
        }

        const inputs = Array.from(document.querySelectorAll('input[type="number"], input[type="text"], input:not([type])'))
            .filter((input) => isPotentialPageSizeInput(input));

        for (const input of inputs) {
            await setInputValue(input, TARGET_PAGE_SIZE);
            const count = await waitForRowsReload(currentCount);

            if (count > currentCount) {
                return count;
            }
        }

        const clickableElements = Array.from(document.querySelectorAll('button, span, div, a, td'))
            .filter((element) => {
                const text = element.textContent.trim();
                const marker = `${element.title || ''} ${element.getAttribute('aria-label') || ''} ${element.className || ''}`;
                const isRecordsControl = /запис|record|row|pagesize|page-size/i.test(marker);

                return isVisible(element)
                    && isPagerArea(element)
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
                    editor.textContent = String(TARGET_PAGE_SIZE);
                    dispatchValueEvents(editor);
                }
            }

            const count = await waitForRowsReload(currentCount);
            if (count > currentCount) {
                return count;
            }
        }

        return getCheckboxes().length;
    };

    const getResearchName = (checkbox, researchId) => {
        const MATERIAL_NAMES = new Set([
            'сыворотка крови',
            'кровь',
            'кровь венозная',
            'кровь капиллярная',
            'моча',
            'осадок мочи',
            'кал',
            'мокрота',
            'ликвор',
            'слюна',
            'гной',
            'отделяемое',
            'отделяемое из уха',
            'отделяемое влагалища',
            'отделяемое уретры',
            'отделяемое женских мочеполовых органов',
            'отделяемое из носа',
            'плазма крови бедная тромбоцитами',
            'жидкость плевральная',
            'носоглоточная слизь',
            'слизь с миндалин',
            'мазок слизистой ротоглотки',
            'соскоб'
        ]);

        const splitText = (text) => String(text || '')
            .split(/\r?\n|\t+/)
            .map((part) => normalizeText(part))
            .filter(Boolean);

        const getElementTextParts = (element) => splitText(element ? element.innerText || element.textContent : '');

        const isTechnicalText = (text) => {
            const normalized = normalizeLabel(text).replace(/\.$/, '');

            return !normalized
                || normalized === researchId
                || /^\d+$/.test(normalized)
                || /^[ab]\d{2}(?:\.\d{2,3})+(?:\.\d+)?$/i.test(normalized)
                || MATERIAL_NAMES.has(normalized)
                || /^(да|нет|true|false)$/i.test(normalized);
        };

        const pickResearchName = (texts) => {
            return texts
                .map((text) => normalizeText(text))
                .find((text) => text.length > 1 && text.length <= 220 && !isTechnicalText(text))
                || '';
        };

        const row = checkbox.closest('tr') || checkbox.closest('[role="row"]') || checkbox.parentElement;
        const cellTexts = row
            ? Array.from(row.querySelectorAll('td, [role="gridcell"]')).flatMap(getElementTextParts)
            : [];
        const rowTexts = getElementTextParts(row);
        const checkboxText = normalizeText(checkbox.title || checkbox.getAttribute('aria-label') || '');
        const checkboxRect = checkbox.getBoundingClientRect();
        const checkboxCenterY = checkboxRect.top + checkboxRect.height / 2;
        const visualRowTexts = Array.from(document.querySelectorAll('td, [role="gridcell"], span, div'))
            .filter((element) => {
                if (!isVisible(element) || element.contains(checkbox) || checkbox.contains(element)) {
                    return false;
                }

                const rect = element.getBoundingClientRect();
                const verticallyAligned = checkboxCenterY >= rect.top - 3 && checkboxCenterY <= rect.bottom + 3;
                const isRightOfCheckbox = rect.left >= checkboxRect.right - 5;

                return verticallyAligned && isRightOfCheckbox;
            })
            .flatMap(getElementTextParts);

        return pickResearchName(cellTexts)
            || pickResearchName(rowTexts)
            || pickResearchName(visualRowTexts)
            || pickResearchName([checkboxText])
            || `Исследование ${researchId}`;
    };

    await openAllResearches();
    await trySetPageSizeTo150();
    await waitForCheckboxesToSettle();

    const byId = new Map();
    for (const checkbox of getCheckboxes()) {
        const researchId = checkbox.getAttribute('item_value');
        if (!researchId || byId.has(researchId)) {
            continue;
        }

        byId.set(researchId, {
            id: researchId,
            name: getResearchName(checkbox, researchId)
        });
    }

    return {
        researches: Array.from(byId.values()).sort((left, right) => left.name.localeCompare(right.name, 'ru')),
        count: byId.size
    };
}

// Заполняем выпадающий список профилями
document.addEventListener('DOMContentLoaded', () => {
    refreshProfiles();
    populateProfileSelect();
    renderProfileManagerList();

    document.getElementById('settingsToggle').addEventListener('click', openSettingsPanel);
    document.getElementById('closeSettings').addEventListener('click', closeSettingsPanel);
    document.getElementById('addProfile').addEventListener('click', () => openProfileEditor());
    document.getElementById('cancelEdit').addEventListener('click', closeProfileEditor);
    document.getElementById('saveProfile').addEventListener('click', saveProfileFromEditor);
    document.getElementById('loadResearches').addEventListener('click', loadResearchesForEditor);
    document.getElementById('researchSearch').addEventListener('input', renderResearchList);
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

    const findCheckboxByItemValue = (itemValue) => {
        return getCheckboxes().find((checkbox) => checkbox.getAttribute('item_value') === itemValue);
    };

    const clickCheckboxLikeUser = (checkbox) => {
        checkbox.scrollIntoView({ block: 'center', inline: 'nearest' });
        if (typeof checkbox.focus === 'function') {
            checkbox.focus();
        }

        checkbox.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true, view: window }));
        checkbox.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, cancelable: true, view: window }));
        checkbox.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
        checkbox.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
        checkbox.click();
    };

    const waitForBarsToProcessSelection = async () => {
        await sleep(220);
    };

    const setCheckboxStateThroughBars = async (itemValue, desiredState) => {
        for (let attempt = 0; attempt < 3; attempt++) {
            const checkbox = findCheckboxByItemValue(itemValue);

            if (!checkbox) {
                console.warn(`Анализ не найден на странице: ${itemValue}`);
                return false;
            }

            if (checkbox.checked === desiredState) {
                return true;
            }

            clickCheckboxLikeUser(checkbox);
            await waitForBarsToProcessSelection();
        }

        return !!findCheckboxByItemValue(itemValue)?.checked === desiredState;
    };

    const resyncSelectedCheckboxThroughBars = async (itemValue) => {
        const checkbox = findCheckboxByItemValue(itemValue);

        if (!checkbox) {
            console.warn(`Анализ не найден на странице: ${itemValue}`);
            return false;
        }

        if (checkbox.checked) {
            const isCleared = await setCheckboxStateThroughBars(itemValue, false);
            if (!isCleared) {
                return false;
            }
        }

        return setCheckboxStateThroughBars(itemValue, true);
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
    
    const targetItemValues = allCheckboxes
        .map((checkbox) => checkbox.getAttribute('item_value'))
        .filter((itemValue) => itemValue && formData.hasOwnProperty(itemValue));

    // Проставляем чек-боксы последовательно, чтобы БАРС успевал обновить нижний список выбранных исследований.
    for (const itemValue of targetItemValues) {
        const shouldBeChecked = formData[itemValue];

        if (shouldBeChecked === true) {
            const isSelected = await resyncSelectedCheckboxThroughBars(itemValue);
            if (!isSelected) {
                console.warn(`Не удалось отметить анализ: ${itemValue}`);
                continue;
            }
            filledCount++;
            console.log(`✓ Отмечен анализ: ${itemValue}`);
        } else if (shouldBeChecked === false) {
            const isCleared = await setCheckboxStateThroughBars(itemValue, false);
            if (!isCleared) {
                console.warn(`Не удалось снять анализ: ${itemValue}`);
                continue;
            }
            filledCount++;
            console.log(`✗ Снят анализ: ${itemValue}`);
        }
    }
    
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
