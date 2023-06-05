const words = [
    "chien", "chat", "oiseau", "poisson", "cheval", "éléphant", "tigre", "girafe", "souris", "lapin", "serpent",
    "loup", "renard", "perroquet", "écureuil", "tortue", "poulet", "canard", "mouton", "vache", "cochon", "abeille",
    "papillon", "escargot", "araignée", "grenouille", "crocodile", "ours", "lion", "pingouin", "autruche", "phasme",
    "singe", "gorille", "chimpanzé", "rat", "hamster", "léopard", "lynx", "phoque", "dauphin", "requin", "baleine",
    "girafe", "hippopotame", "rhinocéros", "koala", "kangourou", "panda", "sanglier", "cerf", "chameau", "dromadaire",
    "zèbre", "vautour", "faucon", "hibou", "aigle", "colibri", "corbeau", "pie", "moineau", "hirondelle", "perruche",
    "canari", "tourterelle", "merle", "rossignol", "étourneau", "geai", "corneille", "mésange", "pinson", "martin-pêcheur",
    "albatros", "mouette", "goéland", "cormoran", "pélican", "flamant", "cygne", "oie", "poule", "coq", "dindon", "paon",
    "caille", "faisan", "pintade", "aigrette", "héron", "cigogne", "perdrix", "coucou", "martinet", "chevalier",
    "sarcelle", "bécasseau", "bernache", "tarier", "foulque", "tadorne", "sizerin", "goélette", "pipit", "tarin",
    "gorgebleue", "bruant", "mouette", "bécassine", "engoulevent", "hirondelle", "huppe", "bergeronnette", "fuligule",
    "grèbe", "cormorant", "martin", "héron", "milan", "fauvette", "bergeronnette", "grive", "gobemouche", "pinson",
    "bruant", "traquet", "geai", "pouillot", "pigeon", "verdier", "rougequeue", "tarier", "buse", "huppe", "rossignol",
    "linotte", "serin", "hirondelle", "pétrel", "passereau", "roitelet", "guifette", "chevalier", "foulque", "courlis",
    "gravelot", "caille", "sittelle", "bécasse", "mésange", "sizerin", "héron", "cigogne", "perdrix", "pipit", "sarcelle",
    "canard", "pouillot", "paruline", "gorgebleue", "bécasseau", "bernache", "bruant", "fuligule", "goélette", "tadorne",
    "chevalier", "traquet", "buse", "tarier", "grive", "pinson", "grèbe", "colombe", "cormoran", "martin", "héron",
    "cigogne", "milan", "fauvette", "bergeronnette", "roitelet", "linotte", "serin", "hirondelle", "pétrel", "passereau",
    "guifette", "courlis", "gravelot", "sittelle", "bécasse", "mésange", "pic", "chardonneret", "faucon", "vanneau",
    "mouette", "roitelet", "busard", "chouette", "engoulevent", "bergeonnette", "fauvette", "martin-pêcheur", "pipit",
    "traquet", "guillemot", "roitelet", "gravelot", "sarcelle", "cormoran", "bécassine", "courlis", "merle", "oie",
    "pouillot", "paruline", "gorgebleue", "bécasseau", "bernache", "bruant", "fuligule", "goélette", "tadorne", "chevalier",
    "traquet", "buse", "tarier", "grive", "pinson", "grèbe", "colombe", "cormoran", "martin", "héron", "cigogne", "milan",
    "fauvette", "bergeronnette", "roitelet", "linotte", "serin", "hirondelle", "pétrel", "passereau", "guifette", "courlis",
    "gravelot", "sittelle", "bécasse", "mésange", "pic", "chardonneret", "faucon", "vanneau", "mouette", "roitelet",
    "busard", "chouette", "engoulevent", "bergeonnette", "fauvette", "martin-pêcheur", "pipit", "traquet", "guillemot",
    "roitelet", "gravelot", "sarcelle", "cormoran", "bécassine", "courlis", "merle", "oie", "pouillot", "paruline",
    "gorgebleue", "bécasseau", "bernache", "bruant", "fuligule", "goélette", "tadorne", "chevalier", "traquet", "buse",
    "tarier", "grive", "pinson", "grèbe", "colombe", "cormoran", "martin", "héron", "cigogne", "milan", "fauvette",
    "bergeronnette", "roitelet", "linotte", "serin", "hirondelle", "pétrel", "passereau", "guifette", "courlis",
    "gravelot", "sittelle", "bécasse", "mésange", "pic", "chardonneret", "faucon", "vanneau", "mouette", "roitelet",
    "busard", "chouette", "engoulevent", "bergeonnette", "fauvette", "martin-pêcheur", "pipit", "traquet", "guillemot",
    "roitelet", "gravelot", "sarcelle", "cormoran", "bécassine", "courlis", "merle", "oie", "pouillot", "paruline",
    "gorgebleue", "bécasseau", "bernache", "bruant", "fuligule", "goélette", "tadorne", "chevalier", "traquet", "buse",
    "tarier", "grive", "pinson", "grèbe", "colombe", "cormoran", "martin", "héron", "cigogne", "milan", "fauvette",
    "bergeronnette", "roitelet", "linotte", "serin", "hirondelle", "pétrel", "passereau", "guifette", "courlis",
    "gravelot", "sittelle", "bécasse", "mésange", "pic", "chardonneret", "faucon", "vanneau", "mouette", "roitelet",
    "busard", "chouette", "engoulevent", "bergeonnette", "fauvette", "martin-pêcheur", "pipit", "traquet", "guillemot"
];