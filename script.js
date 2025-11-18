// === GY7701 / GY4471 Fundamentals of GIS – MCQ Trainer ===
// Enter: first press = check; second press = next question.

// ---------- Question bank ----------
// You can safely extend this list with more questions.
// Try to keep options.length the same (4) for every question.

const questions = [
    // Intro GIS / lecture 1
    {
        topic: "Intro GIS",
        question: "Compared with a normal database, what extra question does a GIS explicitly answer?",
        options: [
            "Why did it happen?",
            "Where did it happen?",
            "Who caused it?",
            "How expensive is it?"
        ],
        correctIndex: 1,
        explanation:
            "Databases handle who/what/when; GIS adds the spatial component – WHERE something happens. :contentReference[oaicite:0]{index=0}"
    },
    {
        topic: "Intro GIS",
        question: "Which of the following is NOT one of the core roles of a GIS listed in the lecture?",
        options: [
            "Capture geographic data",
            "Provide a means for data validation & quality control",
            "Automatically write academic papers",
            "Visualise spatial data and generate maps"
        ],
        correctIndex: 2,
        explanation:
            "The module notes emphasise capture, integration, validation, visualisation, modelling and spatial analysis – not writing your essays for you. :contentReference[oaicite:1]{index=1}"
    },
    {
        topic: "GIS components",
        question: "Which set best matches the main components in the 'GIS anatomy' slide?",
        options: [
            "Hardware, software, methods",
            "Hardware, marketing, psychology",
            "Software, ethics, law",
            "Hardware, GPS-only devices, printers"
        ],
        correctIndex: 0,
        explanation:
            "The slide explicitly shows GIS as a combination of hardware, software and methods (plus data and people in most frameworks). :contentReference[oaicite:2]{index=2}"
    },

    // Data models / vector vs raster / lecture 2 + 3
    {
        topic: "Data models",
        question: "Which pair correctly matches data model and example?",
        options: [
            "Vector – land cover stored as a continuous grid",
            "Raster – building footprints stored as polygons",
            "Vector – address locations stored as points",
            "Raster – list of owners stored in a table"
        ],
        correctIndex: 2,
        explanation:
            "Vector is points/lines/polygons (e.g. address points). Raster is a grid of cells with values. "
    },
    {
        topic: "Field vs object view",
        question: "The 'field view' of geographic information is best described as:",
        options: [
            "The world made of discrete objects like houses and roads",
            "Continuous surfaces such as terrain or air pollution",
            "Only vector features in a geodatabase",
            "Any data stored in an attribute table"
        ],
        correctIndex: 1,
        explanation:
            "Field (area) view represents continuous phenomena like land cover or terrain, often stored as raster. :contentReference[oaicite:4]{index=4}"
    },
    {
        topic: "DEM",
        question: "A Digital Elevation Model (DEM) in raster form typically stores:",
        options: [
            "Elevation values in each grid cell",
            "Only slope values in each grid cell",
            "Land use classes for each country",
            "Names of villages and towns"
        ],
        correctIndex: 0,
        explanation:
            "The lecture shows a DEM as a raster with one elevation value per cell. :contentReference[oaicite:5]{index=5}"
    },

    // Vector / topology / shapefiles / projections
    {
        topic: "Vector basics",
        question: "Which set correctly lists the three basic types of vector features?",
        options: [
            "Cells, tiles, scenes",
            "Points, lines, polygons",
            "Pixels, polygons, scenes",
            "Nodes, rasters, routes"
        ],
        correctIndex: 1,
        explanation:
            "Vector data is represented as points, lines (arcs/routes) and polygons (areas/regions). :contentReference[oaicite:6]{index=6}"
    },
    {
        topic: "Topology",
        question: "In this module, topology in a GIS mainly refers to:",
        options: [
            "The visual appearance of symbols on a map",
            "The mathematical relationships between connected features",
            "The arrangement of layers in the Contents pane",
            "How fast ArcGIS Pro renders large datasets"
        ],
        correctIndex: 1,
        explanation:
            "Topology stores connectivity and adjacency relationships between features, enabling certain spatial queries. :contentReference[oaicite:7]{index=7}"
    },
    {
        topic: "Shapefiles",
        question: "Which file extension stores the attribute data for an ESRI shapefile?",
        options: [
            ".shp",
            ".dbf",
            ".prj",
            ".shx"
        ],
        correctIndex: 1,
        explanation:
            ".dbf stores attribute data; .shp stores geometry, .shx is the index, .prj stores projection. :contentReference[oaicite:8]{index=8}"
    },
    {
        topic: "Shapefiles",
        question: "Which extension stores information about the coordinate and projection system of a shapefile?",
        options: [
            ".prj",
            ".cpg",
            ".sbn",
            ".xml"
        ],
        correctIndex: 0,
        explanation:
            "The .prj file contains information about the shapefile's coordinate and projection system. :contentReference[oaicite:9]{index=9}"
    },
    {
        topic: "Projections",
        question: "Which statement best describes WGS84 vs OSGB36 as presented in the lecture?",
        options: [
            "WGS84 is a British planar grid; OSGB36 is global lat/long",
            "Both are global ellipsoids used in degrees latitude/longitude",
            "WGS84 uses degrees of latitude/longitude; OSGB36 is a British planar grid in kilometres",
            "OSGB36 is only for marine charts; WGS84 only for roads"
        ],
        correctIndex: 2,
        explanation:
            "WGS84 is a global geodetic system in lat/long; OSGB36 is the British National Grid in metres/kilometres. :contentReference[oaicite:10]{index=10}"
    },

    // Attribute data types
    {
        topic: "Attribute data",
        question: "Which is an example of nominal attribute data in GIS?",
        options: [
            "Average income in £ per person",
            "Land cover class (e.g. woodland, urban, water)",
            "Elevation in metres above sea level",
            "Population density per km²"
        ],
        correctIndex: 1,
        explanation:
            "Nominal data categorises with no inherent order, such as land-cover type or place name. :contentReference[oaicite:11]{index=11}"
    },
    {
        topic: "Attribute data",
        question: "Which attribute type is correctly matched with an example?",
        options: [
            "Ordinal – temperature in °C",
            "Interval – age in years",
            "Ratio – population count",
            "Nominal – ordered deprivation deciles"
        ],
        correctIndex: 2,
        explanation:
            "Ratio data has a true zero and can be meaningfully multiplied/divided, such as population count or age. Interval (e.g. °C) has arbitrary zero. :contentReference[oaicite:12]{index=12}"
    },
    {
        topic: "Attribute tables",
        question: "In the context of this module, 'intensities' in an attribute table are best illustrated by:",
        options: [
            "Road type (A-road, B-road, etc.)",
            "Area of a polygon",
            "Pollutant concentration or unemployment rate",
            "Number of schools in a district"
        ],
        correctIndex: 2,
        explanation:
            "Intensities normalise counts to area or population (e.g. pollutant concentration, unemployment rate). :contentReference[oaicite:13]{index=13}"
    },

    // ArcGIS Pro – basics / Practical 1
    {
        topic: "ArcGIS Pro",
        question: "In ArcGIS Pro, the order of layers in the Contents pane primarily affects:",
        options: [
            "How quickly each layer is rendered",
            "Which coordinate system is used",
            "Which layers visually appear on top of others",
            "Whether topology is automatically created"
        ],
        correctIndex: 2,
        explanation:
            "Layers at the top of the Contents pane draw on top of those below, potentially masking them. :contentReference[oaicite:14]{index=14}"
    },
    {
        topic: "ArcGIS Pro",
        question: "Which of the following is a reason given NOT to work in 'My Documents' for ArcGIS at Leicester?",
        options: [
            "It is too slow on the network",
            "It has a space in the folder name which can break some raster tools",
            "It cannot store shapefiles",
            "It automatically deletes projects every week"
        ],
        correctIndex: 1,
        explanation:
            "They explicitly warn that spaces in file paths can break certain commands, so avoid 'My Documents'. :contentReference[oaicite:15]{index=15}"
    },
    {
        topic: "ArcGIS Pro",
        question: "Which is NOT one of the three ways mentioned to inspect attributes for a feature?",
        options: [
            "Explore tool pop-up",
            "Map Tips",
            "Opening the attribute table",
            "The Layout View only"
        ],
        correctIndex: 3,
        explanation:
            "The practical mentions Explore, Map Tips and the attribute table; layout view alone is not a dedicated attribute inspection method. "
    },
    {
        topic: "Scale & labels",
        question: "What does 'scale dependent display' refer to in ArcGIS Pro?",
        options: [
            "Changing coordinate system when zooming",
            "Labels or layers only appearing within certain scale ranges",
            "Automatically exporting maps at multiple scales",
            "Changing the CRS when printing a map"
        ],
        correctIndex: 1,
        explanation:
            "Labels (and sometimes layers) can be set to only draw between specific map scales. "
    },

    // Selection, queries, joins/relates – Practicals 1 & 2
    {
        topic: "SQL selection",
        question: "In 'Select by Attributes', which of these is a valid SQL-style comparison used in the practicals?",
        options: [
            "POPN >> 2500",
            "POPN is greater than 2500",
            "POPN > 2500",
            "POPN >=< 2500"
        ],
        correctIndex: 2,
        explanation:
            "Expressions use normal operators like POPN > 2500; ArcGIS Pro builds this from the drop-downs. :contentReference[oaicite:18]{index=18}"
    },
    {
        topic: "Select by Location",
        question: "In Practical 2, 'Select by Location' with relationship 'Intersect' between landuse and Flood selects:",
        options: [
            "Parcels completely inside the flood polygon only",
            "Parcels touching or overlapping the flood polygon",
            "Only parcels whose centroids fall inside the flood polygon",
            "Only parcels outside the flood polygon"
        ],
        correctIndex: 1,
        explanation:
            "Using 'Intersect' selects any features that share any portion of space – touching or overlapping. :contentReference[oaicite:19]{index=19}"
    },
    {
        topic: "Cardinality",
        question: "The relate between landuse parcels and tenants in Practical 2 is described as:",
        options: [
            "One-to-one",
            "Many-to-one",
            "One-to-many",
            "Many-to-many"
        ],
        correctIndex: 2,
        explanation:
            "Each parcel (apartment block) has multiple tenants, so it is one-to-many. :contentReference[oaicite:20]{index=20}"
    },
    {
        topic: "Joins vs relates",
        question: "Which statement about joins and relates is consistent with the lecture?",
        options: [
            "Joins keep tables separate; relates physically merge them",
            "Joins append fields into one table; relates keep tables separate but linked",
            "Joins only work on polygons; relates only on points",
            "Both require many-to-many cardinality"
        ],
        correctIndex: 1,
        explanation:
            "Joins append attributes into one table; relates create a link so related records can be accessed without merging. "
    },
    {
        topic: "Saving outputs",
        question: "In Practical 2, a 'layer file' (.lyrx) is primarily used to:",
        options: [
            "Store only attribute data",
            "Store symbology and layer properties for reuse",
            "Store geoprocessing models",
            "Store full project history"
        ],
        correctIndex: 1,
        explanation:
            "Layer files store the symbology and some layer settings for a particular dataset. "
    },

    // Spatial analysis – buffers, overlay, spatial join
    {
        topic: "Proximity",
        question: "Which ArcGIS tool is highlighted as the common command for measuring distance between features?",
        options: [
            "BUFFER",
            "NEAR",
            "DISSOLVE",
            "CLIP"
        ],
        correctIndex: 1,
        explanation:
            "The spatial analysis lecture notes that NEAR is the common tool for measuring distance. :contentReference[oaicite:23]{index=23}"
    },
    {
        topic: "Buffering",
        question: "When creating a 2 km buffer around landfill sites with 'Dissolve Type = NONE', the result is:",
        options: [
            "One big merged polygon with no internal boundaries",
            "A 2 km circular polygon around each landfill, keeping overlaps",
            "Only grid cells within 2 km of at least one site",
            "A raster buffer instead of vector polygons"
        ],
        correctIndex: 1,
        explanation:
            "Dissolve = NONE keeps one polygon per feature, so overlapping buffers remain distinct. :contentReference[oaicite:24]{index=24}"
    },
    {
        topic: "Overlapping buffers",
        question: "When overlapping buffers are 'dissolved' according to the lecture:",
        options: [
            "They are converted to raster",
            "Individual buffers are maintained separately",
            "All overlapping buffers become a single merged feature",
            "Only the smallest buffers are kept"
        ],
        correctIndex: 2,
        explanation:
            "Dissolving overlapping buffers merges them into a single feature, removing overlap. :contentReference[oaicite:25]{index=25}"
    },
    {
        topic: "Overlay",
        question: "The landfill practical uses which overlay tool to join postcode points with 5 km grid cells?",
        options: [
            "Clip",
            "Erase",
            "Intersect",
            "Union"
        ],
        correctIndex: 2,
        explanation:
            "They use Intersect to combine postcode_landfill points with the 5 km grid, then summarise by CELLID. "
    },
    {
        topic: "Spatial join",
        question: "In the landfill practical, the Spatial Join between pchc2011 and Landfill_2km uses which match option?",
        options: [
            "Within a distance",
            "Contain",
            "Are identical to",
            "Intersect"
        ],
        correctIndex: 3,
        explanation:
            "The instructions explicitly say to set the match option to Intersect when spatially joining postcode points with landfill buffers. :contentReference[oaicite:27]{index=27}"
    },
    {
        topic: "Spatial join",
        question: "In that same Spatial Join, the 'Merge Rule' for the Count field is set to 'Sum'. This ensures that:",
        options: [
            "Only postcodes with exactly one landfill are kept",
            "Each postcode stores the total number of landfill buffers it lies within",
            "Landfill buffers are dissolved into one polygon",
            "Only postcodes outside buffers are selected"
        ],
        correctIndex: 1,
        explanation:
            "Summing the Count field for overlapping buffers gives the number of landfill sites within 2 km of each postcode. :contentReference[oaicite:28]{index=28}"
    },

    // PWE index and field types
    {
        topic: "PWE index",
        question: "The population-weighted exposure (Pop_W_Exp) field is calculated as:",
        options: [
            "Total population ÷ Join_Count",
            "Join_Count ÷ Total population",
            "Join_Count × Total population",
            "Join_Count + Total population"
        ],
        correctIndex: 2,
        explanation:
            "They explicitly use the expression !Join_Count! * !Total! to compute Pop_W_Exp. "
    },
    {
        topic: "Field types",
        question: "According to Information Box 2, which statement about field names is correct?",
        options: [
            "Field names can start with a number in geodatabases",
            "Field names should start with a letter and avoid special characters",
            "Field names may contain spaces in shapefiles without issue",
            "Field names are limited to 10 characters in geodatabases and 64 in shapefiles"
        ],
        correctIndex: 1,
        explanation:
            "They recommend starting with a letter and then using letters, numbers, underscores or hyphens. :contentReference[oaicite:30]{index=30}"
    },
    {
        topic: "Field types",
        question: "For spatial data stored OUTSIDE a geodatabase (as shapefiles), the maximum field name length is:",
        options: [
            "8 characters",
            "10 characters",
            "32 characters",
            "64 characters"
        ],
        correctIndex: 1,
        explanation:
            "The document states 10 characters for shapefiles, 64 for geodatabase feature classes. :contentReference[oaicite:31]{index=31}"
    },

    // Raster analysis – reclass, map algebra, neighbourhood
    {
        topic: "Raster model",
        question: "In the raster lectures, the term 'resolution' refers to:",
        options: [
            "The file size of the raster",
            "The cell size (ground distance represented by each pixel)",
            "The number of attribute fields in the table",
            "The number of map layers in a project"
        ],
        correctIndex: 1,
        explanation:
            "Resolution is the cell size, e.g. 50 m pixels in the Leicester DEM example. :contentReference[oaicite:32]{index=32}"
    },
    {
        topic: "ASCII to raster",
        question: "When converting from ESRI ASCII grid to raster, which header item specifies the lower-left x coordinate?",
        options: [
            "ncols",
            "nrows",
            "xllcorner",
            "cellsize"
        ],
        correctIndex: 2,
        explanation:
            "The ASCII header includes xllcorner and yllcorner for the lower-left corner coordinates. :contentReference[oaicite:33]{index=33}"
    },
    {
        topic: "Reclassification",
        question: "A common use of reclassification in raster analysis is to:",
        options: [
            "Change the coordinate system",
            "Produce a Boolean mask (0/1) for areas meeting a criterion",
            "Convert raster to vector",
            "Compress raster file sizes"
        ],
        correctIndex: 1,
        explanation:
            "The lecture explicitly uses reclassification to create Boolean masks (e.g. coniferous forest = 1, others = 0). :contentReference[oaicite:34]{index=34}"
    },
    {
        topic: "Neighbourhood",
        question: "Which of the following correctly pairs a neighbourhood function type with its description?",
        options: [
            "Local – uses values in a 3x3 window",
            "Focal – computes on a neighbourhood around each cell",
            "Zonal – always uses the entire raster extent",
            "Global – used only for Boolean masks"
        ],
        correctIndex: 1,
        explanation:
            "Focal functions use a moving neighbourhood (often 3x3). Local uses only the cell itself; zonal uses zones. :contentReference[oaicite:35]{index=35}"
    },
    {
        topic: "Aspect & slopes",
        question: "In the vineyard example, which combination represents 'south-facing' slopes after reclassification of aspect?",
        options: [
            "North, North-East, North-West",
            "East, West",
            "South-West, South, South-East",
            "All aspects with slope > 0°"
        ],
        correctIndex: 2,
        explanation:
            "The lecture reclassifies aspect so that SW, S, and SE are coded as 1 (south-facing) and others as 0. :contentReference[oaicite:36]{index=36}"
    },

    // IDW & geoprocessing steps
    {
        topic: "IDW",
        question: "Inverse Distance Weighting (IDW) is described as a local interpolation method where:",
        options: [
            "Values are copied from the single nearest point",
            "Values are random within each cell",
            "Values at unsampled locations are a weighted average of sampled locations, with weight decreasing with distance",
            "Values are assigned based only on global mean"
        ],
        correctIndex: 2,
        explanation:
            "IDW uses surrounding sample points within a zone of influence, with weights based on inverse distance. "
    },
    {
        topic: "Raster calculator",
        question: "In the habitat / bathymetry geoprocessing diagram, the Raster Calculator is used to:",
        options: [
            "Change projections of all rasters",
            "Combine and transform rasters using algebraic expressions",
            "Export rasters to ASCII format",
            "Clip rasters to vector polygons"
        ],
        correctIndex: 1,
        explanation:
            "Raster Calculator performs map algebra operations (e.g. multiplying masks, inverting bathymetry). "
    },

    // Uncertainty
    {
        topic: "Uncertainty",
        question: "Which is NOT listed as a source of uncertainty in the spatial analysis lecture?",
        options: [
            "Errors in positional or attribute data",
            "Lack of knowledge about variables/parameters",
            "Geographical units used to summarise data",
            "Use of more than one software package"
        ],
        correctIndex: 3,
        explanation:
            "Uncertainty is tied to measurement/attribute errors, limited knowledge, and how data are aggregated – not which brand of GIS you use. :contentReference[oaicite:39]{index=39}"
    }
];

// ---------- State ----------

let shuffledQuestions = [];
let currentIndex = 0;
let selectedOptionIndex = null;
let hasChecked = false;

let totalAnswered = 0;
let totalCorrect = 0;
const history = []; // store booleans (true = correct)

// ---------- DOM refs ----------

const questionTopicEl = document.getElementById("question-topic");
const progressEl = document.getElementById("progress");
const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const feedbackTextEl = document.getElementById("feedback-text");
const explanationEl = document.getElementById("explanation");

const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");

const totalAnsweredEl = document.getElementById("total-answered");
const totalCorrectEl = document.getElementById("total-correct");
const accuracyOverallEl = document.getElementById("accuracy-overall");
const acc10El = document.getElementById("acc-10");
const acc20El = document.getElementById("acc-20");
const acc50El = document.getElementById("acc-50");

// ---------- Helper functions ----------

function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function formatPercent(value) {
    if (Number.isNaN(value)) return "–";
    return `${Math.round(value)}%`;
}

function computeRollingAccuracy(n) {
    if (history.length === 0) return NaN;
    const slice = history.slice(-n);
    if (slice.length === 0) return NaN;
    const correct = slice.filter(Boolean).length;
    return (correct / slice.length) * 100;
}

// ---------- Rendering ----------

function renderQuestion() {
    const q = shuffledQuestions[currentIndex];

    questionTopicEl.textContent = q.topic;
    questionTextEl.textContent = q.question;
    progressEl.textContent = `Question ${currentIndex + 1} of ${shuffledQuestions.length}`;

    // Reset state
    selectedOptionIndex = null;
    hasChecked = false;
    feedbackEl.classList.add("hidden");
    feedbackEl.classList.remove("correct", "incorrect");

    // Buttons
    checkBtn.disabled = false;
    nextBtn.disabled = true;

    // Render options
    optionsContainerEl.innerHTML = "";
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.dataset.index = String(idx);

        const labelSpan = document.createElement("span");
        labelSpan.className = "option-label";
        labelSpan.textContent = String.fromCharCode(65 + idx); // A, B, C, D

        const textSpan = document.createElement("span");
        textSpan.className = "option-text";
        textSpan.textContent = opt;

        btn.appendChild(labelSpan);
        btn.appendChild(textSpan);

        btn.addEventListener("click", () => handleOptionClick(idx));

        optionsContainerEl.appendChild(btn);
    });
}

function handleOptionClick(idx) {
    if (hasChecked) return; // lock options after checking
    selectedOptionIndex = idx;

    const optionButtons = Array.from(
        optionsContainerEl.getElementsByClassName("option-btn")
    );

    optionButtons.forEach(btn => btn.classList.remove("selected"));
    const btn = optionButtons[idx];
    if (btn) {
        btn.classList.add("selected");
    }
}

function showFeedback(correct) {
    const q = shuffledQuestions[currentIndex];

    feedbackEl.classList.remove("hidden");
    feedbackEl.classList.toggle("correct", correct);
    feedbackEl.classList.toggle("incorrect", !correct);

    feedbackTextEl.textContent = correct ? "Correct ✅" : "Not quite ❌";
    explanationEl.textContent = q.explanation;

    // Colour options
    const optionButtons = Array.from(
        optionsContainerEl.getElementsByClassName("option-btn")
    );
    optionButtons.forEach((btn, idx) => {
        btn.classList.add("disabled");
        btn.classList.remove("selected");

        if (idx === q.correctIndex) {
            btn.classList.add("correct");
        } else if (idx === selectedOptionIndex && idx !== q.correctIndex) {
            btn.classList.add("incorrect");
        }
    });

    checkBtn.disabled = true;
    nextBtn.disabled = false;
}

// ---------- Metrics ----------

function updateStats(correct) {
    totalAnswered++;
    if (correct) totalCorrect++;
    history.push(correct);

    totalAnsweredEl.textContent = totalAnswered.toString();
    totalCorrectEl.textContent = totalCorrect.toString();

    const overall = totalAnswered === 0 ? NaN : (totalCorrect / totalAnswered) * 100;
    accuracyOverallEl.textContent = formatPercent(overall);

    acc10El.textContent = formatPercent(computeRollingAccuracy(10));
    acc20El.textContent = formatPercent(computeRollingAccuracy(20));
    acc50El.textContent = formatPercent(computeRollingAccuracy(50));
}

// ---------- Actions ----------

function checkAnswer() {
    if (hasChecked) return;
    if (selectedOptionIndex === null) {
        // Be strict: user must pick something.
        alert("Pick an option before checking.");
        return;
    }

    const q = shuffledQuestions[currentIndex];
    const correct = selectedOptionIndex === q.correctIndex;

    hasChecked = true;
    updateStats(correct);
    showFeedback(correct);
}

function nextQuestion() {
    if (!hasChecked) {
        // If they spam Enter, treat it as check.
        checkAnswer();
        return;
    }

    currentIndex++;
    if (currentIndex >= shuffledQuestions.length) {
        // New round
        shuffledQuestions = shuffleArray(questions);
        currentIndex = 0;

        feedbackEl.classList.remove("hidden");
        feedbackEl.classList.add("correct");
        feedbackTextEl.textContent = "Nice – you've cycled through all questions.";
        explanationEl.textContent =
            "Question order has been reshuffled; keep going until your rolling 50 is close to 100%.";
    }

    renderQuestion();
}

// ---------- Event wiring ----------

document.addEventListener("keydown", (e) => {
    const key = e.key;

    // ENTER = check / next (same behaviour as before)
    if (key === "Enter") {
        e.preventDefault();
        if (!hasChecked) {
            checkAnswer();
        } else {
            nextQuestion();
        }
        return;
    }

    // A/B/C/D = select options 0/1/2/3
    const lower = key.toLowerCase();
    const keyToIndex = { a: 0, b: 1, c: 2, d: 3 };

    if (lower in keyToIndex) {
        e.preventDefault();
        const idx = keyToIndex[lower];
        const q = shuffledQuestions[currentIndex];

        // Only act if that option exists and we haven't checked yet
        if (!hasChecked && q.options[idx] !== undefined) {
            handleOptionClick(idx);
        }
    }
});
// ---------- Init ----------

function init() {
    shuffledQuestions = shuffleArray(questions);
    currentIndex = 0;
    totalAnswered = 0;
    totalCorrect = 0;
    history.length = 0;
    updateStats(false); // will set 1 wrong if we call it this way – so undo:
    totalAnswered = 0;
    totalCorrect = 0;
    history.length = 0;
    totalAnsweredEl.textContent = "0";
    totalCorrectEl.textContent = "0";
    accuracyOverallEl.textContent = "0%";
    acc10El.textContent = "–";
    acc20El.textContent = "–";
    acc50El.textContent = "–";

    renderQuestion();
}

init();
