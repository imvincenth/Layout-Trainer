import { resetTimer } from "./metrics.js";

// const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";

const CUSTOM_API = [
    "the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that",
    "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this",
    "we", "you", "do", "but", "from", "or", "which", "one", "would", "all",
    "will", "there", "say", "who", "who", "make", "when", "can", "more", "if",
    "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", "than",
    "into", "could", "state", "only", "new", "year", "some", "take", "come",
    "these", "know", "see", "user", "get", "like", "then", "first", "any", 
    "work", "now", "may", "such", "give", "over", "think", "most", "even", "find",
    "day", "also", "after", "way", "many", "must", "look", "before", "great",
    "back", "through", "long", "where", "much", "should", "well", "people", 
    "down", "own", "just", "because", "good", "each", "those", "each", "those",
    "feel", "seem", "how", "high", "too", "place", "little", "world", "very",
    "still", "nation", "hand", "old", "life", "tell", "write", "become", "here",
    "show", "house", "both", "between", "need", "mean", "call", "develop", "under",
    "last", "right", "move", "thing", "general", "school", "never", "same",
    "never", "same", "another", "begin", "while", "number", "part", "turn", 
    "real", "leave", "might", "want", "point", "form", "off", "child", "few",
    "small", "since", "against", "ask", "late", "home", "interest", "large",
    "person", "end", "open", "public", "follow", "during", "present", "without",
    "again", "hold", "govern", "around", "possible", "head", "consider", "word",
    "program", "problem", "however", "lead", "system", "set", "order", "eye",
    "plan", "run", "keep", "face", "fact", "group", "play", "stand", "increase",
    "early", "course", "change", "help", "line", "time", "way", "year", "work",
    "government", "day", "man", "world", "life", "part", "house", "course",
    "case", "system", "place", "end", "group", "company", "party", "information",
    "school", "fact", "money", "point", "example", "state", "business", "night",
    "area", "water", "thing", "family", "head", "hand", "order", "John", "side",
    "home", "development", "week", "power", "country", "council", "use", "service",
    "room", "market", "problem", "court", "lot", "war", "police", "interest", "car",
    "law", "road", "form", "face", "education", "policy", "research", "sort", "office",
    "body", "person", "health", "mother", "question", "period", "name", "book",
    "level", "child", "control", "society", "minister", "view", "door", "line",
    "community", "south", "city", "God", "father", "centre", "effect", "staff",
    "position", "kind", "job", "woman", "action", "management", "act", "process",
    "north", "age", "evidence", "idea", "west", "support", "moment", "sense",
    "report", "mind", "church", "morning", "death", "change", "industry", "land",
    "care", "century", "range", "table", "back", "trade", "history", "study",
    "street", "committee", "rate", "word", "food", "language", "experience", "result",
    "team", "other", "sir", "section", "programme", "air", "authority", "role",
    "reason", "price", "town", "class", "nature", "subject", "department",
    "union", "bank", "member", "value", "need", "east", "practice", "type",
    "paper", "date", "decision", "figure", "right", "wife", "president",
    "university", "friend", "club", "quality", "voice", "lord", "stage", "king",
    "us", "situation", "light", "tax", "production", "march", "secretary",
    "art", "board", "may", "hospital", "month", "music", "cost", "field", "award",
    "issue", "bed", "project", "chapter", "girl", "game", "amount", "basis",
    "knowledge", "approach", "series", "love", "top", "news", "front", "future",
    "manager", "account", "computer", "security", "rest", "labour", "structure",
    "hair", "bill", "heart", "force", "attention", "movement", "success", "letter",
    "agreement", "capital", "analysis", "population", "environment", "performance",
    "model", "material", "theory", "growth", "fire", "chance", "boy", "relationship",
    "son", "sea", "record", "size", "property", "space", "term", "director", "plan",
    "behaviour", "treatment", "energy", "St", "Peter", "income", "cup", "scheme", 
    "design", "response", "association", "choice", "pressure", "hall", "couple", "technology",
    "defence", "list", "chairman", "loss", "activity", "contract", "county",
    "wall", "Paul", "difference", "army", "hotel", "sun", "product", "summer",
    "set", "village", "colour", "floor", "season", "unit", "park", "hour", "investment",
    "test", "garden", "husband", "employment", "style", "science", "look", "deal",
    "charge", "help", "economy", "new", "page", "risk", "advice", "event",
    "picture", "commission", "fish", "college", "oil", "doctor", "opportunity",
    "film", "conference", "operation", "application", "press", "extent", "addition",
    "station", "window", "shop", "access", "region", "doubt", "majority", "degree",
    "television", "blood", "statement", "sound", "election", "parliament", "site",
    "mark", "importance", "title", "species", "increase", "return", "concern",
    "public", "competition", "software", "glass", "lady", "answer", "earth",
    "daughter", "purpose", "responsibility", "leader", "river", "eye", "ability",
    "appeal", "opposition", "campaign", "respect", "task", "instance", "sale",
    "whole", "officer", "method", "division", "source", "piece", "pattern", "lack",
    "disease", "equipment", "surface", "oxford", "demand", "post", "mouth", "radio",
    "provision", "attempt", "sector", "firm", "status", "peace", "variety", "teacher",
    "show", "speaker", "baby", "arm", "base", "miss", "safety", "trouble", "culture",
    "direction", "context", "character", "box", "discussion", "past", "weight",
    "organization", "start", "brother", "league", "condition", "machine", "argument",
    "sex", "budget", "english", "transport", "share", "mom", "cash", "principle", "exchange",
    "aid", "library", "version", "rule", "tea", "balance", "afternoon", "reference",
    "protection", "truth", "district", "turn", "smith", "review", "minute", "duty",
    "survey", "presence", "influence", "stone", "dog", "benefit", "collection",
    "executive", "speech", "function", "queen", "marriage", "stock", "failure",
    "kitchen", "student", "effort", "holiday", "career", "attack", "length", "horse",
    "progress", "plant", "visit", "relation", "plant", "visit", "relation", "ball",
    "memory", "bar", "opinion", "quarter", "impact", "scale", "race", "image",
    "trust", "justice", "edge", "gas", "railway", "expression", "advantage",
    "gold", "wood", "network", "text", "forest", "sister", "chair", "cause", "foot",
    "rise", "half", "winter", "corner", "insurance", "step", "damage", "credit",
    "pain", "possibility", "legislation", "strength", "strength", "dad", "speed",
    "crime", "hill", "debate", "will", "supply", "present", "confidence", "Mary",
    "patient", "wind", "solution", "band", "museum", "farm", "pound", "Henry",
    "match", "assessment", "message", "football", "no", "animal", "skin", "scene",
    "article", "stuff", "introduction", "play", "administration", "fear", "proportion",
    "island", "contact", "Japan", "claim", "kingdom", "video", "TV", "existence", 
    "telephone", "move", "traffic", "move", "distance", "relief", "cabinet", "unemployment",
    "reality", "target", "trial", "rock", "concept", "spirit", "accident", "organization", 
    "construction", "coffee", "phone", "distribution", "train", "sight", "difficulty",
    "factor", "exercise", "weekend", "battle", "prison", "Grant", "aircraft",
    "tree", "bridge", "strategy", "contrast", "communication", "background", "shape",
    "wine", "star", "hope", "selection", "detail", "user", "path", "client",
    "search", "master", "rain", "offer", "goal", "dinner", "freedom", "attitude",
    "while", "agency", "seat", "manner", "favour", "fig", "pair", "crisis", "smile",
    "prince", "danger", "call", "capacity", "output", "note", "procedure", "theatre",
    "tour", "recognition", "middle", "absence", "sentence", "package", "track", "card",
    "sign", "commitment", "player", "threat", "weather", "element", "conflict",
    "notice", "victory", "bottom", "finance", "fund", "violence", "file", "profit",
    "standard", "Jack", "route", "China", "expenditure", "second", "discipline",
    "cell", "reaction", "castle", "individual", "lead", "consideration", "debt",
    "option", "payment", "exhibition", "reform", "emphasis", "spring", "audience",
    "feature", "touch", "estate", "assembly", "volume", "youth", "contribution",
    "curriculum", "appearance", "Martin", "torn", "boat", "institute", "membership", 
    "branch", "bus", "waste", "heat", "neck", "object", "captain", "driver", "challenge",
    "conversation", "occasion", "code", "crown", "birth", "silence", "literature",
    "faith", "hell", "entry", "transfer", "gentlemen", "bag", "coal", "investigation",
    "leg", "belief", "total", "major", "document", "description", "murder", "aim",
    "flight", "conclusion", "drug", "tradition", "pleasure", "connection", "owner",
    "treaty", "Tony", "Alan", "desire", "professor", "copy", "ministry", "acid",
    "palace", "address", "institution", "lunch", "generation", "partner", "engine", "newspaper",
    "cross", "reduction", "welfare", "definition", "key", "release", "vote", "examination",
    "judge", "atmosphere", "leadership", "sky", "breath", "creation", "row", "guide",
    "milk", "cover", "screen", "intention", "criticism", "silver", "customer", "journey",
    "explanation", "green", "measure", "brain", "significance", "phase", "injury",
    "run", "coast", "technique", "valley", "drink", "magazine", "potential", "drive",
    "revolution", "bishop", "settlement", "Christ", "metal", "motion", "index", "adult",
    "inflation", "sport", "surprise", "pension", "factory", "tape", "flow", "iron",
    "trip", "lane", "pool", "independence", "hole", "flat", "content", "pay",
    "noise", "combination", "session", "appointment", "fashion", "consumer", 
    "accommodation", ""
]

const textDisplayElement = document.getElementById("textDisplay");
const textInputElement = document.getElementById("textInput");

function getRandomQuote() {
    // return fetch(RANDOM_QUOTE_API_URL)
    // .then(res => res.json())
    // .then(data => data.content);
    let words = [];
    while (words.length < 15) words.push(CUSTOM_API[Math.floor(Math.random()*CUSTOM_API.length)]);
    return words.join(" ");
}

export let wordCount;

export async function renderNewQuote() {
    const quote = await getRandomQuote();
    wordCount = quote.split(" ").length;
    textDisplayElement.innerHTML = "";
    quote.split("").forEach(char => {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        textDisplayElement.appendChild(charSpan);
    })
    textInputElement.value = null;
    resetTimer();
}