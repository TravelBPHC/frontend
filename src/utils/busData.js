const busData = [
  {
    route: "1C",
    route_id: 1438,
    origin_destination: "CBS TO SECUNDERABAD",
  },
  {
    route: "1C",
    route_id: 1440,
    origin_destination: "SECUNDERABAD TO CBS",
  },
  {
    route: "1D",
    route_id: 1005,
    origin_destination: "CHILKALGUDA TO DILSUKH NAGAR",
  },
  {
    route: "1DS",
    route_id: 1441,
    origin_destination: "MIDANI DEPOT TO SECUNDERABAD",
  },
  {
    route: "1DS",
    route_id: 1442,
    origin_destination: "SECUNDERABAD TO MIDANI DEPOT",
  },
  {
    route: "1DV",
    route_id: 480,
    origin_destination: "NGOS TO RETHI FILE BS",
  },
  {
    route: "1DV",
    route_id: 481,
    origin_destination: "RETHIFILE TO NGOS COLONY",
  },
  {
    route: "1P/251",
    route_id: 788,
    origin_destination: "MSRD 2 TO OLD ALWAL",
  },
  {
    route: "1P/251",
    route_id: 1416,
    origin_destination: "OLD ALWAL TO MSRD 2",
  },
  {
    route: "1P/25I",
    route_id: 722,
    origin_destination: "OLD ALWAL TO MGBS",
  },
  {
    route: "1P/25I",
    route_id: 723,
    origin_destination: "MGBS TO OLDALWAL",
  },
  {
    route: "1P/25S",
    route_id: 1080,
    origin_destination: "SUCHITRA TO KOTI",
  },
  {
    route: "1P/25S",
    route_id: 1081,
    origin_destination: "KOTI TO SUCHITRA",
  },
  {
    route: "1V",
    route_id: 463,
    origin_destination: "NGO COLONY TO RETHIFILE",
  },
  {
    route: "1V",
    route_id: 464,
    origin_destination: "RETHIFILE TO NGOS COLONY",
  },
  {
    route: "2C",
    route_id: 231,
    origin_destination: "BARKAS TO RETHIFILE BUSSTATION",
  },
  {
    route: "2C",
    route_id: 236,
    origin_destination: "RETHIFILE BUSSTATION TO BARKAS",
  },
  {
    route: "2Z",
    route_id: 999,
    origin_destination: "SRIRAM COLONY TO JBS",
  },
  {
    route: "2Z",
    route_id: 1000,
    origin_destination: "JBS TO SRIRAM COLONY",
  },
  {
    route: 3,
    route_id: 1171,
    origin_destination: "AFZULGUNJ TO RAJIVGRUHA KALPA",
  },
  {
    route: 3,
    route_id: 1192,
    origin_destination: "RAJIVGRUHA KALPA TO AFZALGUNJ",
  },
  {
    route: "3H",
    route_id: 1172,
    origin_destination: "AFZULGUNJ TO KUSHAIGUDA",
  },
  {
    route: "3H",
    route_id: 1173,
    origin_destination: "KUSHAIGUDA TO AFZULGUNJ",
  },
  {
    route: "3HN",
    route_id: 1128,
    origin_destination: "AFZULGUNJ TO RAMPALLY",
  },
  {
    route: "3HN",
    route_id: 1195,
    origin_destination: "RAMPALLY TO AFZULGUNJ",
  },
  {
    route: "3K",
    route_id: 1426,
    origin_destination: "KOTI TO KUSHAIGUDA",
  },
  {
    route: "3K",
    route_id: 1427,
    origin_destination: "KUSHAIGUDA TO KOTI",
  },
  {
    route: "3KN",
    route_id: 406,
    origin_destination: "KUSHAIGUDA TO AFZALGUNJ",
  },
  {
    route: "3KN",
    route_id: 407,
    origin_destination: "AFZALGUNJ TO KUSHAIGUDA",
  },
  {
    route: "5/229",
    route_id: 1419,
    origin_destination: "MEDCHAL TO MEHDIPATNAM",
  },
  {
    route: "5/229",
    route_id: 1421,
    origin_destination: "MEHDIPATNAM TO MEDCHAL",
  },
  {
    route: "5D",
    route_id: 1228,
    origin_destination: "DAMMAIGUD TO MEHADIPATTANAM",
  },
  {
    route: "5K",
    route_id: 371,
    origin_destination: "MEHDIPATNAM TO SEUNDERABAD",
  },
  {
    route: "5K",
    route_id: 372,
    origin_destination: "SECUNDERABAD TO MEHDIPATNAM",
  },
  {
    route: "5K/251",
    route_id: 1530,
    origin_destination: "KEYS HIGH SCHOOL TO AIRPORT",
  },
  {
    route: "5K/251",
    route_id: 1531,
    origin_destination: "AIRPORT TO KEYS HIGH SCHOOL",
  },
  {
    route: "5K/92",
    route_id: 997,
    origin_destination: "RAJENDRANAGAR TO SECUNDERABAD",
  },
  {
    route: "5K/92",
    route_id: 1007,
    origin_destination: "SECUNDERABAD TO RAJENDRANAGAR",
  },
  {
    route: "5M",
    route_id: 297,
    origin_destination: "SECUNDERABAD TO MEHDIPATNAM",
  },
  {
    route: "5M",
    route_id: 299,
    origin_destination: "MEHDIPATNAM TO SECUNDERABAD",
  },
  {
    route: "5M/16M",
    route_id: 1063,
    origin_destination: "SECUNDERABAD TO MALKAJGIRI",
  },
  {
    route: "5M/16M",
    route_id: 1064,
    origin_destination: "MEHDIPATNAM TO MALKAJGIRI",
  },
  {
    route: "5R",
    route_id: 212,
    origin_destination: "HAKIMPET DEPOT TO MEHDIPATAM",
  },
  {
    route: "5R",
    route_id: 1082,
    origin_destination: "MEHDIPATNAM TO HAKIMPET DEPOT",
  },
  {
    route: "5S",
    route_id: 1227,
    origin_destination: "MEHADIPATNAM TO DAMMAYIGUDA",
  },
  {
    route: "6H",
    route_id: 1166,
    origin_destination: "ECILXROADS TO TOLICHOWKI",
  },
  {
    route: "6H",
    route_id: 1186,
    origin_destination: "TOLICHOWKI TO ECILXROADS",
  },
  {
    route: "8A",
    route_id: 918,
    origin_destination: "FALKUNAMA TO SECUNDERABAD",
  },
  {
    route: "8A",
    route_id: 922,
    origin_destination: "SECUNDERABAD TO FALKUNAMA DEPO",
  },
  {
    route: "8C",
    route_id: 1342,
    origin_destination: "SECBAD TO CHANDRAYANAGUTTA",
  },
  {
    route: "8C",
    route_id: 1344,
    origin_destination: "CHANDRAYANA GUTTA  TO SECBAD",
  },
  {
    route: "8R",
    route_id: 217,
    origin_destination: "CBS RISALABAZAR",
  },
  {
    route: "8R",
    route_id: 1086,
    origin_destination: "RISALA BAZAR TO CBS",
  },
  {
    route: "8R/25M",
    route_id: 1153,
    origin_destination: "INDRAGANDHI STATUE TO CBS",
  },
  {
    route: "8R/25S",
    route_id: 1105,
    origin_destination: "SUCHITRA TO CBS",
  },
  {
    route: "8X",
    route_id: 1378,
    origin_destination: "SEC BAD TO RANIGUNJ",
  },
  {
    route: "8X",
    route_id: 1386,
    origin_destination: "RANIGUNJ TO SAFILGUDA",
  },
  {
    route: "9C",
    route_id: 913,
    origin_destination: "CBS TO SANATH NAGAR",
  },
  {
    route: "9C",
    route_id: 920,
    origin_destination: "SANATH NAGAR TO CBS",
  },
  {
    route: "9K",
    route_id: 157,
    origin_destination: "JEEDIMETLA AFZALGUNJ",
  },
  {
    route: "9K",
    route_id: 159,
    origin_destination: "AFZALGUNJ TO JEEDIMETLA",
  },
  {
    route: "9K/272",
    route_id: 1217,
    origin_destination: "GANDIMAISAMMA TO CBS",
  },
  {
    route: "9M",
    route_id: 1233,
    origin_destination: "CHANDRAYANA GUTTA TO SANATHNA",
  },
  {
    route: "9M",
    route_id: 1345,
    origin_destination: "SANATHNAGAR TO CHANDRAYANA GUT",
  },
  {
    route: "9X",
    route_id: 110,
    origin_destination: "JEEDIMETLA DEPOT TO CBS",
  },
  {
    route: "9X",
    route_id: 113,
    origin_destination: "CBS TO JEEDIMETLA DEPOT",
  },
  {
    route: "9X/230",
    route_id: 128,
    origin_destination: "DUNDIGAL VILLAGE TO CBS",
  },
  {
    route: "9X/230",
    route_id: 134,
    origin_destination: "CBS TO DUNDIGAL",
  },
  {
    route: "9X/230X",
    route_id: 800,
    origin_destination: "DUNDIGAL TO AFZULGUNJ",
  },
  {
    route: "9YF",
    route_id: 194,
    origin_destination: "BORABANDA CHARMINAR",
  },
  {
    route: "9YF",
    route_id: 200,
    origin_destination: "CHARMINAR TO BORABANDA",
  },
  {
    route: 10,
    route_id: 183,
    origin_destination: "SECUNDERABAD TO SANATH NAGAR",
  },
  {
    route: 10,
    route_id: 184,
    origin_destination: "SANATHNAGAR TO SECUNDERABAD",
  },
  {
    route: "10/224",
    route_id: 1256,
    origin_destination: "MIYAOUR TO SECUNDERABAD",
  },
  {
    route: "10/224",
    route_id: 1258,
    origin_destination: "SECUNDERABAD TO MIYAPUR DEPOT1",
  },
  {
    route: "10F",
    route_id: 196,
    origin_destination: "BORABANDA TO SECUNDERABAD",
  },
  {
    route: "10F",
    route_id: 197,
    origin_destination: "SECUNDERABAD TO BORABANDA",
  },
  {
    route: "10H",
    route_id: 151,
    origin_destination: "SECUNDERABAD TO KONDAPUR",
  },
  {
    route: "10H",
    route_id: 152,
    origin_destination: "KONDAPUR TO SECUNDERABAD",
  },
  {
    route: "10H/16",
    route_id: 1051,
    origin_destination: "CGCL DEPOT TO FLAGSTONE",
  },
  {
    route: "10H/16",
    route_id: 1052,
    origin_destination: "FLAGSTONE TO ECIL X ROAD",
  },
  {
    route: "10H/16A",
    route_id: 1183,
    origin_destination: "KONDAPUR TO CGCL DEPOT",
  },
  {
    route: "10H/16A",
    route_id: 1185,
    origin_destination: "KONDAPUR TO CHERLAPALLY",
  },
  {
    route: "10H/17H",
    route_id: 131,
    origin_destination: "KONDAPUAR TOECIL X ROAD",
  },
  {
    route: "10H/17H",
    route_id: 1167,
    origin_destination: "ECILXROADS TO KONDAPUR",
  },
  {
    route: "10H/219",
    route_id: 1252,
    origin_destination: "SECUNDERABAD TO PATANCHERU",
  },
  {
    route: "10H/219",
    route_id: 1253,
    origin_destination: "PATANCHERU TO SECUNDERABAD",
  },
  {
    route: "10H/224",
    route_id: 810,
    origin_destination: "SECUNDERABAD TO MIYAPUR2 DEPOT",
  },
  {
    route: "10H/25I",
    route_id: 204,
    origin_destination: "OLD ALWAL TO KONDAPUR",
  },
  {
    route: "10H/25I",
    route_id: 205,
    origin_destination: "KONDAPUR TO OLD ALWAL",
  },
  {
    route: "10H/25S",
    route_id: 1134,
    origin_destination: "SUCHITRA TO KONDAPUR",
  },
  {
    route: "10H/25S",
    route_id: 1135,
    origin_destination: "KONDAPUR TO SUCHITRA",
  },
  {
    route: "10H/A",
    route_id: 897,
    origin_destination: "LINGAMPALLY TO ALLWYN",
  },
  {
    route: "10H/L",
    route_id: 1246,
    origin_destination: "SECUNDERABAD TO LINGAMPALLI",
  },
  {
    route: "10H/L",
    route_id: 1248,
    origin_destination: "LINGAMPALLI TO SECUNDERBAD",
  },
  {
    route: "10H/U",
    route_id: 895,
    origin_destination: "HCU MAIN GATE TO SECUNDERABAD",
  },
  {
    route: "10H/W",
    route_id: 1255,
    origin_destination: "SECUNDERABAD TO WAVEROCK",
  },
  {
    route: "10H/W",
    route_id: 1257,
    origin_destination: "WAVEROCK TO SECENDRABAD",
  },
  {
    route: "10K",
    route_id: 1341,
    origin_destination: "KUKATPALLY TO SECUNDERABAD",
  },
  {
    route: "10K",
    route_id: 1376,
    origin_destination: "SAFILGUDA TO KUKATPALLY",
  },
  {
    route: "10KH",
    route_id: 877,
    origin_destination: "ALLWYN X ROAD TO MYTRIVANAM",
  },
  {
    route: "10KH",
    route_id: 878,
    origin_destination: "MYTHRIVANAM TO ALLWYNXROAD",
  },
  {
    route: "10KJ",
    route_id: 129,
    origin_destination: "JAGADGIRI GUTTA TO SECUNDERABA",
  },
  {
    route: "10KJ",
    route_id: 130,
    origin_destination: "SECUNDERABAD TO JAGADGIRIGUTTA",
  },
  {
    route: "10KM",
    route_id: 812,
    origin_destination: "SECUNDERABAD TO NIZAMPETXROADS",
  },
  {
    route: "10KM",
    route_id: 813,
    origin_destination: "SECUNDERABADTOMALAYSIANTOWNSHI",
  },
  {
    route: "10KM",
    route_id: 839,
    origin_destination: "NIZAMPET X ROAD TO SECUNDERABA",
  },
  {
    route: "10L",
    route_id: 409,
    origin_destination: "KPHB IV TO SECUNDERABAD",
  },
  {
    route: "10L",
    route_id: 410,
    origin_destination: "SECUNDERABAD TO KPHB 4TH PHASE",
  },
  {
    route: "10YF",
    route_id: 192,
    origin_destination: "BORABANDA TO SECUNDERABAD",
  },
  {
    route: "10YF",
    route_id: 195,
    origin_destination: "SECUNDERABAD TO BORABANDA",
  },
  {
    route: "11W",
    route_id: 1238,
    origin_destination: "ESI TO WAVEWROCK",
  },
  {
    route: "11W",
    route_id: 1331,
    origin_destination: "WAVE ROCK TO ESI",
  },
  {
    route: 12,
    route_id: 91,
    origin_destination: "KONDAPUR TO RAMNAGAR GUNDU",
  },
  {
    route: 12,
    route_id: 92,
    origin_destination: "RAMNAGAR TO KONDAPUR",
  },
  {
    route: "12RM",
    route_id: 341,
    origin_destination: "RAMNAGAR TO VBIT PARK",
  },
  {
    route: "16A",
    route_id: 1065,
    origin_destination: "SECUNDERABAD TO ECILXROADS",
  },
  {
    route: "16A",
    route_id: 1387,
    origin_destination: "ECILXROADS TO SECUNDERABAD",
  },
  {
    route: "16A/10H",
    route_id: 1179,
    origin_destination: "FLAG STONE TO CHERLAPALLY",
  },
  {
    route: "16A/219",
    route_id: 1332,
    origin_destination: "ECIL X ROAD TO PATANCHERUVU",
  },
  {
    route: "16A/219",
    route_id: 1335,
    origin_destination: "PATANCHERU TO ECIL X ROADS",
  },
  {
    route: "16A/47L",
    route_id: 1068,
    origin_destination: "ECIL X ROAD TO WAVEROCK",
  },
  {
    route: "16A/47L",
    route_id: 1546,
    origin_destination: "WAVEROCK TO ECIL X ROADS",
  },
  {
    route: "16A/47V",
    route_id: 1075,
    origin_destination: "ECIL TO VBIT",
  },
  {
    route: "16A/49M",
    route_id: 896,
    origin_destination: "MEHDIPATNAM TO ECIL X ROAD",
  },
  {
    route: "16A/49M",
    route_id: 901,
    origin_destination: "ECIL X ROAD TO MEHDIPATNAM",
  },
  {
    route: "16C/29R",
    route_id: 1279,
    origin_destination: "ECILXROADS TO APURUPA COLONY",
  },
  {
    route: "16C/29R",
    route_id: 1338,
    origin_destination: "APURUPA COLONY TO ECILXROADS",
  },
  {
    route: "16H",
    route_id: 1542,
    origin_destination: "ECIL X ROAD TO SECUNDERABAD",
  },
  {
    route: "16H",
    route_id: 1543,
    origin_destination: "RETHIFILE TO ECIL X ROADS",
  },
  {
    route: "16H/47L",
    route_id: 1544,
    origin_destination: "ECIL X ROADS TO WAVE ROCK",
  },
  {
    route: "16H/47L",
    route_id: 1545,
    origin_destination: "WAVEROCK TO ECIL X ROAD",
  },
  {
    route: "16H/47V",
    route_id: 1550,
    origin_destination: "ECIL X ROADS TO VBIT",
  },
  {
    route: "16M",
    route_id: 1551,
    origin_destination: "MALKAJGIRI TO SECUNDERABAD",
  },
  {
    route: "16M/5M",
    route_id: 1552,
    origin_destination: "MALKAJGIRI TO MEHDIPATNAM",
  },
  {
    route: "17D",
    route_id: 1204,
    origin_destination: "DAMMAYIGUDA TO SECENDRABAD",
  },
  {
    route: "17H",
    route_id: 1221,
    origin_destination: "CHERLAPALLY TO MEHDIPATNAM",
  },
  {
    route: "17H",
    route_id: 1229,
    origin_destination: "MEHDIPATNAM TO CHERLAPALLY",
  },
  {
    route: "17H/47LI",
    route_id: 1066,
    origin_destination: "ECIL X ROADS TO FLAG STONE",
  },
  {
    route: "17H/49M",
    route_id: 280,
    origin_destination: "KUSHAIGUDA TO MEHDIPATNAM",
  },
  {
    route: "17H/49M",
    route_id: 282,
    origin_destination: "MEHDIPATNAM TO KUSHAIGUDA",
  },
  {
    route: "17HN",
    route_id: 1188,
    origin_destination: "ECIL X ROADS TO SECUNDERABAD",
  },
  {
    route: "17HN",
    route_id: 1547,
    origin_destination: "SECUNDERABAD TO ECIL X ROAD",
  },
  {
    route: "17HN/47LI",
    route_id: 1548,
    origin_destination: "FLAGSTONE TO ECIL X ROADS",
  },
  {
    route: "17S",
    route_id: 1203,
    origin_destination: "SECNDERABAD TO DAMMAYIGUDA",
  },
  {
    route: "18/30",
    route_id: 270,
    origin_destination: "UPPAL X ROAD TO JAGADGIRI GUTT",
  },
  {
    route: "18/30",
    route_id: 271,
    origin_destination: "JAGADGIRIGUTTA UPPALXROAD",
  },
  {
    route: "18C",
    route_id: 1164,
    origin_destination: "CHOWDARIGUDA TO JBS",
  },
  {
    route: "18C",
    route_id: 1181,
    origin_destination: "JBS TO CHOWDARIGUDA",
  },
  {
    route: "19/224",
    route_id: 847,
    origin_destination: "MEHDIPATNAM TO MIYAPUR DEPOT 1",
  },
  {
    route: "19K",
    route_id: 605,
    origin_destination: "MEHDIPATNAM TO KPHB TEMPLESTOP",
  },
  {
    route: "19K",
    route_id: 606,
    origin_destination: "KPHB TEMPLESTOP TO MEHDIPATNAM",
  },
  {
    route: "19K/224",
    route_id: 1495,
    origin_destination: "KPHB COLONY TO MIYAPUR2 DEPOT",
  },
  {
    route: "19K/288",
    route_id: 1494,
    origin_destination: "MIYAPUR 2 DEPOT TO BALAJITEMPL",
  },
  {
    route: "19M",
    route_id: 248,
    origin_destination: "KPHB 4TH PHASE TO MEHDIPATANAM",
  },
  {
    route: "19M",
    route_id: 264,
    origin_destination: "MEHDIPATANAM TO KPHB 4TH PHASE",
  },
  {
    route: "19M/288",
    route_id: 675,
    origin_destination: "MIYAPUR 2 DEPOT TO MEHDIPATNAM",
  },
  {
    route: "19M/288",
    route_id: 1562,
    origin_destination: "MIYAPUR 1 TO MEHDIPATNAM",
  },
  {
    route: "20P",
    route_id: 321,
    origin_destination: "SECUNDERABAD TO AFZALGUNJ",
  },
  {
    route: "20P",
    route_id: 322,
    origin_destination: "AFZALGUNJ TO SECUNDERABAD",
  },
  {
    route: "20X/251",
    route_id: 323,
    origin_destination: "SECUNDERABAD TO RGI AIRPORT",
  },
  {
    route: "20X/251",
    route_id: 324,
    origin_destination: "RGI AIRPOT TO RETHIFILE BSTN",
  },
  {
    route: "21/107J",
    route_id: 225,
    origin_destination: "VENKATAPURAM TO SAROOR NAGAR",
  },
  {
    route: "21/107J",
    route_id: 227,
    origin_destination: "SAROORNAGAR TO VENKATAPURAM",
  },
  {
    route: "21/107S",
    route_id: 1091,
    origin_destination: "SAROOR NAGAR TO HAKIMPET",
  },
  {
    route: "21W/107",
    route_id: 220,
    origin_destination: "WEST VENKATAPURAM TO SAROOR",
  },
  {
    route: "21W/107",
    route_id: 224,
    origin_destination: "SAROORNAGAR WESTVENKATAPURAM",
  },
  {
    route: "21W/107J",
    route_id: 1092,
    origin_destination: "WEST VENKATAPURAM TO DSNR",
  },
  {
    route: "21W/107J",
    route_id: 1093,
    origin_destination: "DSNR TO WEST VENKATAPURAM",
  },
  {
    route: "22/90L",
    route_id: 1112,
    origin_destination: "LB NAGAR TO HAKIMPET",
  },
  {
    route: "22/90L",
    route_id: 1113,
    origin_destination: "HAKIMPET DEPOT TO KESHAVAGIRI",
  },
  {
    route: "23K",
    route_id: 643,
    origin_destination: "VBIT TO MIYAPUR2",
  },
  {
    route: "24B",
    route_id: 288,
    origin_destination: "SECUNDERABAD TO BALAJINAGAR",
  },
  {
    route: "24B",
    route_id: 291,
    origin_destination: "BALAJINAGAR TO SECUNDERABAD",
  },
  {
    route: "25HA",
    route_id: 1122,
    origin_destination: "HAKIMPET TO INDHIRA STATUE",
  },
  {
    route: "25S",
    route_id: 620,
    origin_destination: "SECUNDERABAD To  SUCHITRA",
  },
  {
    route: "25S",
    route_id: 625,
    origin_destination: "SUCHITRA To SECUNDERABAD",
  },
  {
    route: "29R",
    route_id: 1212,
    origin_destination: "APURUPA COLONY TO SECNDRBADBAD",
  },
  {
    route: "29R",
    route_id: 1214,
    origin_destination: "SECUNDERABAD TO APURUPA COLONY",
  },
  {
    route: "29R/272",
    route_id: 111,
    origin_destination: "GANDIMISAMMA TO SECUNDERABAD",
  },
  {
    route: "29R/272",
    route_id: 112,
    origin_destination: "SECUNDERABAD TO GANDIMAISAMMA",
  },
  {
    route: 30,
    route_id: 756,
    origin_destination: "JAGATHGIRIGUTTA TO SECUNDERABA",
  },
  {
    route: 30,
    route_id: 757,
    origin_destination: "SECUNDERABAD TO JAGATHGIRIGUTA",
  },
  {
    route: "31X",
    route_id: 1319,
    origin_destination: "PRASHANT NAGAR TO JNTU",
  },
  {
    route: "38H",
    route_id: 1384,
    origin_destination: "HANPET TO SEC BAD",
  },
  {
    route: "38S/47",
    route_id: 1518,
    origin_destination: "VBIT TO MYTRIVANAM",
  },
  {
    route: "38S/47V",
    route_id: 304,
    origin_destination: "SAFIL GUDA TO VBIT PARK",
  },
  {
    route: "38S/47V",
    route_id: 305,
    origin_destination: "VBIT  PARK TO SAFILGUDA",
  },
  {
    route: "38X",
    route_id: 1359,
    origin_destination: "SECU NDERABAD TO HANUMANPET",
  },
  {
    route: "38X",
    route_id: 1377,
    origin_destination: "SECUNDERABAD TO SAFILGUDA",
  },
  {
    route: "38X/10",
    route_id: 1358,
    origin_destination: "HANUMANPET TO SANATHNAGAR",
  },
  {
    route: 40,
    route_id: 148,
    origin_destination: "SECUNDERABAD TO KOTI",
  },
  {
    route: 40,
    route_id: 709,
    origin_destination: "KOTI TO SECUNDERABAD",
  },
  {
    route: "45F",
    route_id: 105,
    origin_destination: "MGBS TO BORABANDA",
  },
  {
    route: "45F",
    route_id: 664,
    origin_destination: "MGBS TO BORABANDA",
  },
  {
    route: "45H",
    route_id: 740,
    origin_destination: "MGBS TO ALLWYN X ROADS",
  },
  {
    route: "45H",
    route_id: 741,
    origin_destination: "ALLWYN X ROADS TO MGBS",
  },
  {
    route: "45HA",
    route_id: 107,
    origin_destination: "KOTI TERMINAL ALWYN X ROADS",
  },
  {
    route: "45HA",
    route_id: 108,
    origin_destination: "ALLWYN X ROAD TO KOTI",
  },
  {
    route: "45K",
    route_id: 109,
    origin_destination: "KOTI TERMINAL TO SANATH NAGAR",
  },
  {
    route: "45K",
    route_id: 116,
    origin_destination: "SANATNAGAR TO KOTI",
  },
  {
    route: "45KM",
    route_id: 117,
    origin_destination: "KOTI TERMINAL TO KUKATPALLY",
  },
  {
    route: "45KM",
    route_id: 778,
    origin_destination: "MGBS TO KUKATPALLY",
  },
  {
    route: "45KM",
    route_id: 779,
    origin_destination: "KUKATPALLY TO MGBS",
  },
  {
    route: "45KMG",
    route_id: 731,
    origin_destination: "MGBS SANATHNAGAR",
  },
  {
    route: "45KMG",
    route_id: 732,
    origin_destination: "SANATHNAGR TO MGBS",
  },
  {
    route: "45MF",
    route_id: 119,
    origin_destination: "RAMNAGAR TO BORABANDA",
  },
  {
    route: "45MF",
    route_id: 724,
    origin_destination: "BORABANDA TO RAMNAGAR GUNDU",
  },
  {
    route: 47,
    route_id: 77,
    origin_destination: "SECUNDERABAD TO FILMNAGAR",
  },
  {
    route: 47,
    route_id: 78,
    origin_destination: "FILM NAGAR TO SECUNDERABAD",
  },
  {
    route: "47H/90L",
    route_id: 1057,
    origin_destination: "LB NAGAR TO WAVE ROCK",
  },
  {
    route: "47L",
    route_id: 1126,
    origin_destination: "SECUNDERABAD TO KONDAPUR",
  },
  {
    route: "47L",
    route_id: 1127,
    origin_destination: "KONDAPUR TO SECUNDERABAD",
  },
  {
    route: "47L/M",
    route_id: 1022,
    origin_destination: "FILM NAGAR TO SECUNDERABAD",
  },
  {
    route: "47L/M",
    route_id: 1023,
    origin_destination: "FLAGSTONE TO SECUNDERABAD",
  },
  {
    route: "47LI",
    route_id: 1056,
    origin_destination: "WAVEROCK TO SECUNDERABAD",
  },
  {
    route: "47LI",
    route_id: 1058,
    origin_destination: "SECUNDERABAD TO WAVEROCK",
  },
  {
    route: "47LI/90LF",
    route_id: 1024,
    origin_destination: "FLAGSTONE TO LB NAGAR",
  },
  {
    route: "47LI/90LF",
    route_id: 1060,
    origin_destination: "LBNAGAR TO FLAGSTONE TOWERS",
  },
  {
    route: "47V",
    route_id: 1352,
    origin_destination: "SECUNDERABAD TO VBIT",
  },
  {
    route: "47V",
    route_id: 1353,
    origin_destination: "VBIT TO SECUNDERABAD",
  },
  {
    route: "47Y",
    route_id: 1062,
    origin_destination: "SECUNDERABAD TO FILM NAGAR",
  },
  {
    route: "47Y/90D",
    route_id: 317,
    origin_destination: "FILM NGR TO DSNR",
  },
  {
    route: "47Y/90D",
    route_id: 319,
    origin_destination: "DILSUKHNAGAR TO FILMNAGAR",
  },
  {
    route: "47Y/F",
    route_id: 1021,
    origin_destination: "FILMNAGAR TO SECUNDERABAD",
  },
  {
    route: "49A/251",
    route_id: 1532,
    origin_destination: "PRAYAKAT BHAVAN TO SHAMSHABAD",
  },
  {
    route: "49M",
    route_id: 66,
    origin_destination: "SECUNDERABAD TO TOLICHOWKI",
  },
  {
    route: "49M",
    route_id: 67,
    origin_destination: "TOLICHOKI TO SECUNDERABAD",
  },
  {
    route: "49M/16A",
    route_id: 1220,
    origin_destination: "CHERLAPALLY TO MEHDIPATNAM",
  },
  {
    route: "49M/16A",
    route_id: 1230,
    origin_destination: "MEHDIPATNAM TO CHERLAPALLY",
  },
  {
    route: "49M/250",
    route_id: 1190,
    origin_destination: "TOLICHOWKI TO CGCL DEPOT",
  },
  {
    route: "49M/250",
    route_id: 1191,
    origin_destination: "TOLICHOWKI TO CHERLAPALLY",
  },
  {
    route: "49M/251",
    route_id: 339,
    origin_destination: "SECUNDERABAD TO RGI AIRPORT",
  },
  {
    route: "49M/251",
    route_id: 342,
    origin_destination: "RGI AIRPOT TO SECUNDERABAD",
  },
  {
    route: "49Z",
    route_id: 181,
    origin_destination: "SECUNDERABAD ZOOPARK",
  },
  {
    route: "49Z",
    route_id: 182,
    origin_destination: "ZOOPARK SECUNDERABAD",
  },
  {
    route: "83J",
    route_id: 156,
    origin_destination: "KACHIGUDA TO APURUPA COLONY",
  },
  {
    route: "83J",
    route_id: 165,
    origin_destination: "APURUPA COLONY TO KACHIGUDA",
  },
  {
    route: "85U",
    route_id: 915,
    origin_destination: "FALKUNAMA TO UPPUGUDA",
  },
  {
    route: "85U",
    route_id: 923,
    origin_destination: "UPPUGUDA TO FALKUNAMA DEPOT",
  },
  {
    route: "90D",
    route_id: 1020,
    origin_destination: "DILSUKHNAGAR TO SECUNDERABAD",
  },
  {
    route: "90D",
    route_id: 1549,
    origin_destination: "SECUNDERABAD TO DILSUKH NAGAR",
  },
  {
    route: "90DS",
    route_id: 822,
    origin_destination: "UPPAL DEPOT TO SNEHAPURI",
  },
  {
    route: "90L",
    route_id: 445,
    origin_destination: "JBS TO LB NAGAR",
  },
  {
    route: "90L",
    route_id: 447,
    origin_destination: "LB NAGAR TO JBS",
  },
  {
    route: "90L/229",
    route_id: 306,
    origin_destination: "LB NAGAR TO MEDCHAL DEPOT",
  },
  {
    route: "90L/229",
    route_id: 309,
    origin_destination: "MEDCHAL DEPOT TO LB NAGAR",
  },
  {
    route: "90L/251",
    route_id: 1536,
    origin_destination: "SECUNDERABAD TO SHAMSHABAD",
  },
  {
    route: "90L/251",
    route_id: 1537,
    origin_destination: "SHAMSHABAD TO SECUNDERABAD",
  },
  {
    route: "90L/25S",
    route_id: 1103,
    origin_destination: "SUCHITRA TO LB NAGAR RINGROAD",
  },
  {
    route: "90L/25S",
    route_id: 1104,
    origin_destination: "LBNAGAR RINGROAD TO SUCHITRA",
  },
  {
    route: "90L/300",
    route_id: 476,
    origin_destination: "MEHDIPATNAM TO RETHIFILE",
  },
  {
    route: "90L/300",
    route_id: 477,
    origin_destination: "RETHIFILE TO MEHADIPATNAM",
  },
  {
    route: "90L/47L",
    route_id: 1553,
    origin_destination: "LB NAGAR TO VBIT",
  },
  {
    route: "92X",
    route_id: 930,
    origin_destination: "MEHDIPATNAM TO RJNR",
  },
  {
    route: "94H",
    route_id: 378,
    origin_destination: "HIMAYATH SAGAR TO KOTI",
  },
  {
    route: "94H",
    route_id: 379,
    origin_destination: "KOTI TO HIMAYATH SAGAR",
  },
  {
    route: "94HX",
    route_id: 955,
    origin_destination: "RJNRDEPOT TO RJNR",
  },
  {
    route: "94HX",
    route_id: 956,
    origin_destination: "RJNR TO RJNRDEPOT",
  },
  {
    route: "94KO",
    route_id: 1009,
    origin_destination: "KOTI TO RAJENDRANAGAR",
  },
  {
    route: "95K",
    route_id: 383,
    origin_destination: "RJNR DEPOT TO SRIRAM COLONY",
  },
  {
    route: "95K",
    route_id: 391,
    origin_destination: "SRIRAM COLONY TO RJNR DEPOT",
  },
  {
    route: "96L",
    route_id: 1471,
    origin_destination: "LB NAGAR TO DILSUKH NAGAR",
  },
  {
    route: "96L",
    route_id: 1472,
    origin_destination: "DILSUKH NAGAR TO LB NAGAR",
  },
  {
    route: "100DV",
    route_id: 1464,
    origin_destination: "NGOSCOLONY TO KOTI WOMENS CLG",
  },
  {
    route: "100DV",
    route_id: 1465,
    origin_destination: "KOTI WOMENS CLG TO NGOS COLONY",
  },
  {
    route: 102,
    route_id: 237,
    origin_destination: "LAB QUATERS TO RETHI FILE BUS",
  },
  {
    route: 102,
    route_id: 240,
    origin_destination: "RETHI FILE BUS STATION TO LAB",
  },
  {
    route: 102,
    route_id: 1361,
    origin_destination: "LAB QUARTERS TO KOTI WMS CLG",
  },
  {
    route: 102,
    route_id: 1362,
    origin_destination: "KOTI TO LAB QUARTERS",
  },
  {
    route: "102B",
    route_id: 246,
    origin_destination: "BADANGPET TO RETHIFILE BUSSTN",
  },
  {
    route: "102B",
    route_id: 250,
    origin_destination: "RETHI FILE  BADANGPET",
  },
  {
    route: "102C",
    route_id: 1414,
    origin_destination: "SECUNDRERABAD TO BALAPUR",
  },
  {
    route: "102C",
    route_id: 1415,
    origin_destination: "BALAPUR TO SECUNDERABAD",
  },
  {
    route: "102D",
    route_id: 1393,
    origin_destination: "KOTI WOMENS COLLEGE TO MIDANI",
  },
  {
    route: "102D",
    route_id: 1394,
    origin_destination: "MIDANI DEPOT TO KOTI WMNS CLG",
  },
  {
    route: "102F",
    route_id: 1396,
    origin_destination: "FAROOQ NAGAR TO SECUNDERABAD",
  },
  {
    route: "102F",
    route_id: 1397,
    origin_destination: "SECUNDERABAD TO FAROOQ NAGAR",
  },
  {
    route: "102FN",
    route_id: 1402,
    origin_destination: "FAROOQ NAGAR TO KOTI WMS CLG",
  },
  {
    route: "102FN",
    route_id: 1406,
    origin_destination: "KOTI WMNS CLG TO FAROOQ NAGAR",
  },
  {
    route: "102K",
    route_id: 1408,
    origin_destination: "KOTI TO CHANDRAYAN GUTTA",
  },
  {
    route: "102KD",
    route_id: 1409,
    origin_destination: "MIDANI DEPO TO CHADRAYANA GUTA",
  },
  {
    route: "102KS",
    route_id: 1410,
    origin_destination: "RETHIFILE TO CHANDRAYANAGUTTA",
  },
  {
    route: "102KS",
    route_id: 1411,
    origin_destination: "CHANDRAYANAGUTTA TO RETHIFILE",
  },
  {
    route: "102L",
    route_id: 1412,
    origin_destination: "LAB QUARTERES TO MIDANI",
  },
  {
    route: "102L",
    route_id: 1413,
    origin_destination: "MIDANI TO LAB QUARTERS",
  },
  {
    route: "102MD",
    route_id: 1478,
    origin_destination: "BALAPUR TO MIDHANI DEPOT",
  },
  {
    route: "102MD",
    route_id: 1479,
    origin_destination: "MIDHANI DEPOT TO BALAPUR",
  },
  {
    route: "102X",
    route_id: 1491,
    origin_destination: "BADANGPET TO MIDANI DEPOT",
  },
  {
    route: "102X",
    route_id: 1492,
    origin_destination: "MIDHANI DEPOT TO BADANGPET",
  },
  {
    route: 107,
    route_id: 980,
    origin_destination: "SAROOR NAGAR TO SECUNDERABAD",
  },
  {
    route: 107,
    route_id: 981,
    origin_destination: "SECUNDERABAD TO SAROOR NAGAR",
  },
  {
    route: "107J/P",
    route_id: 1140,
    origin_destination: "SAROOR NAGAR TO RETHIFILE BSTN",
  },
  {
    route: "107J/P",
    route_id: 1143,
    origin_destination: "SECUNDERABAD TO SAROORNAGAR",
  },
  {
    route: "107V/P",
    route_id: 1139,
    origin_destination: "DILSUKH NAGAR TO SECUNDERABAD",
  },
  {
    route: "107VR",
    route_id: 294,
    origin_destination: "SECUNDERABAD TO L B NAGAR",
  },
  {
    route: "107VR",
    route_id: 296,
    origin_destination: "L B NAGAR TO SECUNDERABAD",
  },
  {
    route: "107VR",
    route_id: 1037,
    origin_destination: "JBS TO SAHARA ESTATE",
  },
  {
    route: "107VR",
    route_id: 1480,
    origin_destination: "DILSUKHNAGAR DP TO RETHIFILE",
  },
  {
    route: "113/216",
    route_id: 96,
    origin_destination: "UPPAL TO LINGAMPALLY",
  },
  {
    route: "113/216",
    route_id: 100,
    origin_destination: "LINGAMPALLY TO UPPAL",
  },
  {
    route: "113/288",
    route_id: 630,
    origin_destination: "UPPAL TO MOINABAD",
  },
  {
    route: "113/288",
    route_id: 631,
    origin_destination: "MOINABAD TO UPPAL BUSSTOP",
  },
  {
    route: "113A",
    route_id: 1130,
    origin_destination: "AG COLONY TO CHENGINCHERL",
  },
  {
    route: "113A",
    route_id: 1133,
    origin_destination: "CHEGICHERLA VILLAGE TO AG CLNY",
  },
  {
    route: "113A/280",
    route_id: 1368,
    origin_destination: "GITHAM TO UPPAL",
  },
  {
    route: "113A/280",
    route_id: 1370,
    origin_destination: "MOTHINAGAR TO GITHAM",
  },
  {
    route: "113E",
    route_id: 1235,
    origin_destination: "ESI TO UPPAL",
  },
  {
    route: "113E/L",
    route_id: 415,
    origin_destination: "LINGAMPALLY TO UPPAL",
  },
  {
    route: "113E/L",
    route_id: 425,
    origin_destination: "UPPAL TO LINGAMPALLY",
  },
  {
    route: "113I/K",
    route_id: 1247,
    origin_destination: "KUKATPALLY TO UPPAL 113I/K",
  },
  {
    route: "113I/M",
    route_id: 394,
    origin_destination: "MEHADIPATNAM TO UPPAL",
  },
  {
    route: "113I/M",
    route_id: 399,
    origin_destination: "UPPAL TO MEHDIPATNAM",
  },
  {
    route: "113I/M/216",
    route_id: 905,
    origin_destination: "LINGAMPALLY RO UPPAL VIA MP",
  },
  {
    route: "113I/M/216",
    route_id: 908,
    origin_destination: "UPPAL TO LINGAMPALLY VIA MP",
  },
  {
    route: "113IM/216",
    route_id: 769,
    origin_destination: "UPPAL DEPOT TO INFOSYS",
  },
  {
    route: "113IMU/216",
    route_id: 783,
    origin_destination: "INFOSYS TO UPPAL",
  },
  {
    route: "113IMU/216",
    route_id: 784,
    origin_destination: "INFOSYS TO UPPAL DEPOT",
  },
  {
    route: "113IY/K",
    route_id: 790,
    origin_destination: "HSBC TO UPPAL DEPOT",
  },
  {
    route: "113IY/K",
    route_id: 791,
    origin_destination: "HSBC TO UPPAL BUS STOP",
  },
  {
    route: "113J",
    route_id: 869,
    origin_destination: "JNTU TO UPPAL",
  },
  {
    route: "113K",
    route_id: 1557,
    origin_destination: "UPPAL TO MIYAPUR 2 DEPOT",
  },
  {
    route: "113K I/KP",
    route_id: 689,
    origin_destination: "UPPAL TO KPHB COLONY",
  },
  {
    route: "113K I/KP",
    route_id: 728,
    origin_destination: "UPPAL TO KPHB TEMPLE STOP",
  },
  {
    route: "113K Y/F",
    route_id: 634,
    origin_destination: "KPHB TEMPLE STOP TO UPPAL",
  },
  {
    route: "113K/225",
    route_id: 1347,
    origin_destination: "UPPAL TO ESI",
  },
  {
    route: "113K/255L",
    route_id: 267,
    origin_destination: "LINGAMPALLY TO UPPAL",
  },
  {
    route: "113K/255L",
    route_id: 269,
    origin_destination: "UPPAL LINGAMPALLY",
  },
  {
    route: "113K/L",
    route_id: 633,
    origin_destination: "UPPAL TO LINGAMPALLY",
  },
  {
    route: "113K/L",
    route_id: 710,
    origin_destination: "UPPAL DEPOT TO LINGAMPALLY",
  },
  {
    route: "113K/Y",
    route_id: 1132,
    origin_destination: "BORABANDA TO CGCL DEPOT",
  },
  {
    route: "113K/Y",
    route_id: 1182,
    origin_destination: "KONDAPUR TO CGCL DEPOT",
  },
  {
    route: "113KYH",
    route_id: 1180,
    origin_destination: "INFOTECH TO UPPAL",
  },
  {
    route: "113M",
    route_id: 366,
    origin_destination: "UPPAL TO MEHADIPATNAM",
  },
  {
    route: "113M",
    route_id: 367,
    origin_destination: "MEHDIPATNAM TO UPPAL",
  },
  {
    route: "113VB",
    route_id: 637,
    origin_destination: "VBIT TO UPPAL",
  },
  {
    route: "113VB",
    route_id: 638,
    origin_destination: "UPPAL BUSSTOP TO VBIT",
  },
  {
    route: "113Y/F",
    route_id: 636,
    origin_destination: "BODUPPAL TO BORABANDA",
  },
  {
    route: "113Y/K",
    route_id: 697,
    origin_destination: "KONDAPUR TO UPPAL",
  },
  {
    route: "113Y/K",
    route_id: 708,
    origin_destination: "UPPAL DEPOT TO KONDAPUR",
  },
  {
    route: "113YF",
    route_id: 283,
    origin_destination: "BORABANDA TO BODUPPAL",
  },
  {
    route: "113YK",
    route_id: 396,
    origin_destination: "UPPAL TO KONDAPUR",
  },
  {
    route: 115,
    route_id: 754,
    origin_destination: "KOTI MEDICAL CLG TO UPPAL",
  },
  {
    route: 115,
    route_id: 777,
    origin_destination: "UPPAL TO KOTI MEDICAL CLG",
  },
  {
    route: "118 X",
    route_id: 730,
    origin_destination: "KACHIGUDA TO MEHDIPATNAM",
  },
  {
    route: "118W",
    route_id: 123,
    origin_destination: "KOTI TO WAVEROCK",
  },
  {
    route: "118W",
    route_id: 125,
    origin_destination: "WAVE ROCK TO MGBS",
  },
  {
    route: "118WQ",
    route_id: 368,
    origin_destination: "WAVEROCK TO MEHDIPATNAM",
  },
  {
    route: "118WQ",
    route_id: 375,
    origin_destination: "MEHADIPATNAM TO WAVEROCK",
  },
  {
    route: "1202K",
    route_id: 1407,
    origin_destination: "CHANDRAYANA GUTTA TO KOTI",
  },
  {
    route: "126/300",
    route_id: 1280,
    origin_destination: "HAYATNAGAR TO JNTU",
  },
  {
    route: "126/300",
    route_id: 1283,
    origin_destination: "JNTU TO HAYATNAGAR",
  },
  {
    route: "126M",
    route_id: 256,
    origin_destination: "MEHADIPATNAM TO JNTU",
  },
  {
    route: "126M",
    route_id: 259,
    origin_destination: "JNTU TO MEHADIPATNAM",
  },
  {
    route: "127J/222",
    route_id: 1033,
    origin_destination: "DILSUKH NAGAR TO PATANCHERU",
  },
  {
    route: "127JK",
    route_id: 639,
    origin_destination: "LINGAMPALLY TO DILSUKH NAGAR",
  },
  {
    route: "127JK",
    route_id: 640,
    origin_destination: "DILSUKH NAGAR TO LINGAMPALLY",
  },
  {
    route: "127K",
    route_id: 1,
    origin_destination: "KOTI TO KONDAPUR",
  },
  {
    route: "127K",
    route_id: 2,
    origin_destination: "127K KONDAPUR TO KOTI",
  },
  {
    route: "127K/222",
    route_id: 1327,
    origin_destination: "KONDAPUR TO LINGAMPALLY",
  },
  {
    route: "127K/222",
    route_id: 1328,
    origin_destination: "LINGAMPALLY TO KONDAPUR",
  },
  {
    route: "127KA",
    route_id: 1469,
    origin_destination: "SAI NAGAR TO ALLWYN X ROADS",
  },
  {
    route: "127KD",
    route_id: 1324,
    origin_destination: "DILSHUKNAGAR TO KONDAPUR",
  },
  {
    route: "127KD",
    route_id: 1329,
    origin_destination: "KONDAPUR TO DILSHUKNAGAR",
  },
  {
    route: "127KH",
    route_id: 1456,
    origin_destination: "HAYATNAGAR TO KONDAPUR",
  },
  {
    route: "127KL",
    route_id: 1325,
    origin_destination: "KONDAPUR TO LINGAMPALLY",
  },
  {
    route: "127KL",
    route_id: 1326,
    origin_destination: "LB NAGAR TO KONDAPUR",
  },
  {
    route: "127KV",
    route_id: 23,
    origin_destination: "KONDAPUR NGOS",
  },
  {
    route: "127KV",
    route_id: 24,
    origin_destination: "NGOS KONDAPUR",
  },
  {
    route: "127VB",
    route_id: 11,
    origin_destination: "KOTI TO VBIT",
  },
  {
    route: "127VB",
    route_id: 12,
    origin_destination: "VBIT TO KOTI",
  },
  {
    route: "136H",
    route_id: 149,
    origin_destination: "NAMPALLY STATION T ECIL X ROAD",
  },
  {
    route: "136H",
    route_id: 150,
    origin_destination: "ECIL BUSSTATION TO NAMPALLY",
  },
  {
    route: 147,
    route_id: 1523,
    origin_destination: "LINGAMPALLY TO ECIL X ROAD",
  },
  {
    route: 147,
    route_id: 1524,
    origin_destination: "ECIL X ROAD TO ALLWYN X ROAD",
  },
  {
    route: "156/118",
    route_id: 1455,
    origin_destination: "WIPRO CIRCLE TO NGOS COLONY",
  },
  {
    route: "156/204",
    route_id: 1459,
    origin_destination: "MEHDIPATNAM TO SANGHI NAGAR",
  },
  {
    route: "156/204",
    route_id: 1460,
    origin_destination: "SANGHI NAGAR TO MEHDIPATNAM",
  },
  {
    route: "156/288",
    route_id: 581,
    origin_destination: "NGOS COLONY TO CHILKUR",
  },
  {
    route: "156/288",
    route_id: 582,
    origin_destination: "CHILKUR TO NGOS COLONY",
  },
  {
    route: "156/299",
    route_id: 461,
    origin_destination: "HYT NAGAR TO MEHDIPATNAM",
  },
  {
    route: "156/299",
    route_id: 462,
    origin_destination: "MEHDIPATNAM TO HYT-1",
  },
  {
    route: "156L",
    route_id: 1287,
    origin_destination: "LBNGARRINGROAD TO MEHDIPATNAM",
  },
  {
    route: "156L",
    route_id: 1288,
    origin_destination: "MEHDIPATNAM TO LBNAGAR",
  },
  {
    route: "156V",
    route_id: 458,
    origin_destination: "MEHDIPATNAM TO NGO COLONY",
  },
  {
    route: "156V",
    route_id: 467,
    origin_destination: "NGO S TO MEHDIPATNAM",
  },
  {
    route: "156V/118",
    route_id: 1451,
    origin_destination: "NGOS TO WIPRO CIRCLE",
  },
  {
    route: "156V/118",
    route_id: 1453,
    origin_destination: "DILSUKHNAGAR TO WIPRO CIRCLE",
  },
  {
    route: 158,
    route_id: 1488,
    origin_destination: "DILSUKHNAGAR DEPOT SANATHNAGAR",
  },
  {
    route: 158,
    route_id: 1489,
    origin_destination: "SANATHNAGAR TO DILSUKHNAGAR DE",
  },
  {
    route: "158/272G",
    route_id: 1211,
    origin_destination: "LB NAGAR TO GANDIMYSAMMA XROAD",
  },
  {
    route: "158D/L",
    route_id: 976,
    origin_destination: "DILSUKH NAGAR TO SANATH NAGAR",
  },
  {
    route: "158D/L",
    route_id: 978,
    origin_destination: "SANATH NAGAR TO DILSUKH NAGAR",
  },
  {
    route: "158FB",
    route_id: 1322,
    origin_destination: "BNREDDY NAGAR TO BORABANDA",
  },
  {
    route: "158FV",
    route_id: 563,
    origin_destination: "BORABANDA TO NGOS COLONY",
  },
  {
    route: "158FV",
    route_id: 564,
    origin_destination: "NGO COLONY  TO BORABANDA",
  },
  {
    route: "158J/L",
    route_id: 928,
    origin_destination: "LB NAGAR TO BANDLAGUDA DEPOT",
  },
  {
    route: "158J/L",
    route_id: 931,
    origin_destination: "BUNDLAGUDA DEPOT TO LB NAG",
  },
  {
    route: "158VJ",
    route_id: 579,
    origin_destination: "NGOS COLONY TO JEEDIMETLA DEPOT",
  },
  {
    route: "158VJ",
    route_id: 580,
    origin_destination: "JEEDIMETLA TO NGOS COLONY",
  },
  {
    route: 171,
    route_id: 189,
    origin_destination: "SECUNDERABAD GAJULARAMARAM",
  },
  {
    route: 171,
    route_id: 190,
    origin_destination: "GAJULARAMARAM TO SECUNDERABAD",
  },
  {
    route: "171M",
    route_id: 175,
    origin_destination: "GAJULARAMARAM TO CBS",
  },
  {
    route: "171M",
    route_id: 177,
    origin_destination: "CBS TO GAJULARAMARAM",
  },
  {
    route: 186,
    route_id: 834,
    origin_destination: "NGOS TO KPHB",
  },
  {
    route: 186,
    route_id: 1295,
    origin_destination: "HAYAT NAGAR TO KUKATPALLY",
  },
  {
    route: "186/224",
    route_id: 796,
    origin_destination: "MIYAPUR2BUSDEPOTTO NGOS COLONY",
  },
  {
    route: 187,
    route_id: 411,
    origin_destination: "KPHB IV PHASE TO CBS",
  },
  {
    route: 187,
    route_id: 412,
    origin_destination: "CBS TO KPHB IV PHASE",
  },
  {
    route: "187D",
    route_id: 1461,
    origin_destination: "NGOS COLONY TO KPHB  MAIN ROAD",
  },
  {
    route: "187D/L",
    route_id: 1242,
    origin_destination: "KPHB TEMPLE BUS STOP TO LB NAG",
  },
  {
    route: "187DL",
    route_id: 562,
    origin_destination: "LB NAGAR TO KPHB",
  },
  {
    route: "187DM",
    route_id: 1330,
    origin_destination: "KPHB MAIN ROAD TO NGOS COLONY",
  },
  {
    route: "187DV",
    route_id: 1503,
    origin_destination: "KPHB 4TH PHASE TO NGOS COLONY",
  },
  {
    route: "187DV",
    route_id: 1505,
    origin_destination: "NGOS TO KPHB 4TH PHASE",
  },
  {
    route: "187LB",
    route_id: 848,
    origin_destination: "LB Nagar TO MIYAPUR 2 DEPOT",
  },
  {
    route: 188,
    route_id: 1016,
    origin_destination: "RAJENDERA NAGAR TO SECUNDERAB",
  },
  {
    route: 189,
    route_id: 885,
    origin_destination: "JEEDIMETLA TO KALIMANDIR",
  },
  {
    route: "189M",
    route_id: 174,
    origin_destination: "APURUPA COLONY TO MEHDHIPATNAM",
  },
  {
    route: "189M",
    route_id: 178,
    origin_destination: "MEHDIPATNAM TO APURUPA COLONY",
  },
  {
    route: "189MA",
    route_id: 887,
    origin_destination: "KALIMANDIR TO JEEDIMETLA",
  },
  {
    route: "190R",
    route_id: 1417,
    origin_destination: "AG COLONY TO RAMNAGAR",
  },
  {
    route: "190R",
    route_id: 1437,
    origin_destination: "RAMNAGAR TO AG COLONY",
  },
  {
    route: "190RK",
    route_id: 351,
    origin_destination: "RAMNAGAR GUNDU TO KPHB TEMPLE",
  },
  {
    route: "190RK",
    route_id: 352,
    origin_destination: "KPHB TEMPLE TO RAMNAGARGUNDU",
  },
  {
    route: "201KH",
    route_id: 1458,
    origin_destination: "HAYATNAGAR TO KUNTLOOR",
  },
  {
    route: "216/113M",
    route_id: 719,
    origin_destination: "GITAM UNIVERSITY TO UPPAL",
  },
  {
    route: "216/113M",
    route_id: 776,
    origin_destination: "UPPAL TO GITAM UNIVERSITY",
  },
  {
    route: "216D",
    route_id: 1296,
    origin_destination: "DILSUKNAGAR TO LINGAMPALLY",
  },
  {
    route: "216D",
    route_id: 1297,
    origin_destination: "LINGAMPALLY TO DILSUKNAGAR",
  },
  {
    route: "216H",
    route_id: 1298,
    origin_destination: "HAYATNAGAR TO LINGAMPALLY",
  },
  {
    route: "216H",
    route_id: 1299,
    origin_destination: "LINGAMPALLY TO HAYATNAGAR",
  },
  {
    route: "216L",
    route_id: 1002,
    origin_destination: "LINGAMPALLY TO MGBS",
  },
  {
    route: "216L",
    route_id: 1306,
    origin_destination: "LB NAGAR TO LINGAMPALLY",
  },
  {
    route: "216L/W",
    route_id: 360,
    origin_destination: "LINGAMPALLY TO WAVEROCK",
  },
  {
    route: "216L/W",
    route_id: 361,
    origin_destination: "WAVEROCK TO LINGAMPALLY",
  },
  {
    route: "216M",
    route_id: 889,
    origin_destination: "LINGAMPALLY TO MEHDIPATNAM",
  },
  {
    route: "216M",
    route_id: 892,
    origin_destination: "MEHDIPATNAM TO LINGAMPALLY",
  },
  {
    route: 217,
    route_id: 991,
    origin_destination: "LINGAMPALLY TO L B NAGAR",
  },
  {
    route: 217,
    route_id: 993,
    origin_destination: "LB NAGAR TO LINGAMPALLY",
  },
  {
    route: "217A",
    route_id: 364,
    origin_destination: "KOTI MEDICAL CLG  PATANCHERU",
  },
  {
    route: "217A",
    route_id: 369,
    origin_destination: "PATANCHERU TO KOTI MEDICAL COL",
  },
  {
    route: "217AD",
    route_id: 1372,
    origin_destination: "PATANCHERU TO MIDANI DEPOT",
  },
  {
    route: "217D",
    route_id: 1486,
    origin_destination: "DILSUKHNAGAR DEPOT TO GITHAM",
  },
  {
    route: "217D",
    route_id: 1487,
    origin_destination: "GITHAM TO DILSUKHNAGAR DEPOT",
  },
  {
    route: "217D/A",
    route_id: 79,
    origin_destination: "PATANCHERU TO DILSUKNAGAR",
  },
  {
    route: "217D/A",
    route_id: 99,
    origin_destination: "DILSUKHNAGAR TO PATANCHERU",
  },
  {
    route: "217D/L",
    route_id: 975,
    origin_destination: "DILSUKH NAGAR TO LINGAMPALLY",
  },
  {
    route: 218,
    route_id: 404,
    origin_destination: "KOTI MEDICAL COLLEGE TO PTC",
  },
  {
    route: 218,
    route_id: 405,
    origin_destination: "PATANCHERU TO KOTI MEDICAL CLG",
  },
  {
    route: "218/224",
    route_id: 1510,
    origin_destination: "MYTHRIVANAM TO MIYAPUR2BUSDEPO",
  },
  {
    route: "218BL",
    route_id: 1490,
    origin_destination: "BADANGPET TO LINGAMPALLY",
  },
  {
    route: "218BL",
    route_id: 1493,
    origin_destination: "LINGAMPALLY TO BADANGPET",
  },
  {
    route: "218C",
    route_id: 235,
    origin_destination: "PATANCHERU TO CBS",
  },
  {
    route: "218C",
    route_id: 238,
    origin_destination: "CBS TO PATANCHERU",
  },
  {
    route: "218D",
    route_id: 85,
    origin_destination: "DILSUKHNAGAR TO PATANCHERU",
  },
  {
    route: "218D",
    route_id: 98,
    origin_destination: "PATANCHERU TO DILSUKHNAGAR",
  },
  {
    route: "218DV",
    route_id: 459,
    origin_destination: "NGOS COLONY TO LINGAMPALLY",
  },
  {
    route: "218DV",
    route_id: 460,
    origin_destination: "LINGAMPALLY TO NGOS COLONY",
  },
  {
    route: "218H",
    route_id: 1354,
    origin_destination: "LINGAMPALLY TO HAYAT NAGAR",
  },
  {
    route: "218KL",
    route_id: 1449,
    origin_destination: "LINGAMPALLY TO KUKATPALLY",
  },
  {
    route: "218L",
    route_id: 88,
    origin_destination: "LINGAMPALLY TO DILSUKHNAGAR",
  },
  {
    route: "218L",
    route_id: 89,
    origin_destination: "DILSUKHNAGAR TO LINGAMPALLY",
  },
  {
    route: "218M",
    route_id: 1450,
    origin_destination: "LINGAMPALLY TO MIDANI DEPOT",
  },
  {
    route: "218MD",
    route_id: 1454,
    origin_destination: "MIDHANI DEPOT TO PATANCHERU",
  },
  {
    route: "218MD",
    route_id: 1475,
    origin_destination: "PATANCHERU TO MIDHANI DEPOT",
  },
  {
    route: 219,
    route_id: 75,
    origin_destination: "SECUNDERABAD TO PATANCHERU",
  },
  {
    route: 219,
    route_id: 76,
    origin_destination: "PATANCHERU TO SECUNDERABAD",
  },
  {
    route: "219/229",
    route_id: 314,
    origin_destination: "MEDCHAL DEPO TO PATANCHERU",
  },
  {
    route: "219/229",
    route_id: 318,
    origin_destination: "PATANCHERU TO MEDCHAL",
  },
  {
    route: "222A",
    route_id: 15,
    origin_destination: "KOTI TO PATANCHERU",
  },
  {
    route: "222A",
    route_id: 16,
    origin_destination: "PATANCHERU TO KOTI 222A",
  },
  {
    route: 224,
    route_id: 694,
    origin_destination: "UPPAL TO MIYAPUR2 DEPOT",
  },
  {
    route: "224/226",
    route_id: 678,
    origin_destination: "MIYAPUR2 DEPOT TO SECUNDERABAD",
  },
  {
    route: "224/226",
    route_id: 861,
    origin_destination: "SECUNDERABD TO  MIYAPUR2 DEPOT",
  },
  {
    route: "224G",
    route_id: 863,
    origin_destination: "MIYAPUR X ROAD TO MLR COLLEGE",
  },
  {
    route: "225C",
    route_id: 1304,
    origin_destination: "CBS TO LINGAMPALLY",
  },
  {
    route: "225L",
    route_id: 573,
    origin_destination: "LB NAGAR TO LINGAMPALLY",
  },
  {
    route: "225L",
    route_id: 574,
    origin_destination: "LINGAMPALLY TO LB NAGAR",
  },
  {
    route: "225L/299",
    route_id: 1309,
    origin_destination: "LINGAMPALLY TO HAYAT NAGAR",
  },
  {
    route: "225L/299",
    route_id: 1310,
    origin_destination: "HAYAT NAGAR TO LINGAMPALLY",
  },
  {
    route: "225LV",
    route_id: 1571,
    origin_destination: "NGOS COLONY TO BHEL",
  },
  {
    route: "225LV",
    route_id: 1573,
    origin_destination: "BHEL TO NGOS COLONY",
  },
  {
    route: "225V/L",
    route_id: 1311,
    origin_destination: "LINGAMPALLY TO NGOS COLONY",
  },
  {
    route: "225V/L",
    route_id: 1312,
    origin_destination: "NGOS COLONY TO LINGAMPALLY",
  },
  {
    route: 226,
    route_id: 711,
    origin_destination: "LINGAMPALLY TO SECUNDERABAD",
  },
  {
    route: 226,
    route_id: 1116,
    origin_destination: "SECENDRBAD TO LINGAMPALLY",
  },
  {
    route: "226L/229",
    route_id: 1404,
    origin_destination: "LINGAMPALLI TO MEDCHAL",
  },
  {
    route: "226L/229",
    route_id: 1405,
    origin_destination: "MEDCHAL TO LINGAMPALLI",
  },
  {
    route: 229,
    route_id: 310,
    origin_destination: "MEDCHAL DEPO TO SECUNDERABAD",
  },
  {
    route: 229,
    route_id: 313,
    origin_destination: "SECUNDERABAD TO MEDCHEL",
  },
  {
    route: "230D/189",
    route_id: 1499,
    origin_destination: "DUNDIGAL TO MEHADIPATTNAM",
  },
  {
    route: "230D/189",
    route_id: 1500,
    origin_destination: "MEHADIPATTNAM TO DUNDIGAL",
  },
  {
    route: "230X",
    route_id: 162,
    origin_destination: "JEEDIMETLA TO DUNDIGAL",
  },
  {
    route: "250C",
    route_id: 1239,
    origin_destination: "AFZALGUNJ TO CHENGIRCHARL",
  },
  {
    route: "250E",
    route_id: 1178,
    origin_destination: "ECIL TO CHERLAPALLY",
  },
  {
    route: "250E",
    route_id: 1222,
    origin_destination: "CHERLAPALLY TO ECIL X ROADS",
  },
  {
    route: "251X",
    route_id: 1436,
    origin_destination: "AIRPORT TO JBS",
  },
  {
    route: "251X",
    route_id: 1448,
    origin_destination: "JBS TO AIRPORT",
  },
  {
    route: 252,
    route_id: 381,
    origin_destination: "DILSUKNAGAR TO AIRPORT",
  },
  {
    route: 252,
    route_id: 382,
    origin_destination: "AIRPORT TO DILSUKHNAGAR",
  },
  {
    route: "253M",
    route_id: 647,
    origin_destination: "MAHESWARAM TO SECUNDERABAD",
  },
  {
    route: "253M",
    route_id: 649,
    origin_destination: "SECUNDERABAD TO MAHESWARAM",
  },
  {
    route: 277,
    route_id: 103,
    origin_destination: "IBRAHIMPATNAM TO MGBS",
  },
  {
    route: 277,
    route_id: 104,
    origin_destination: "MGBS TO IBRAHIMPATNAM",
  },
  {
    route: 279,
    route_id: 329,
    origin_destination: "IBRAHIMPT TO JBS",
  },
  {
    route: 279,
    route_id: 330,
    origin_destination: "JBS TO IBRAHIMPATNAM",
  },
  {
    route: 281,
    route_id: 327,
    origin_destination: "ECIL TO GHATKESHAR",
  },
  {
    route: 281,
    route_id: 328,
    origin_destination: "GHATKESAR TO ECIL",
  },
  {
    route: "288D",
    route_id: 258,
    origin_destination: "MEHDHIPATNAM TO CHILKUR",
  },
  {
    route: "288D",
    route_id: 260,
    origin_destination: "CHILKUR TO MEHDIPATNAM",
  },
  {
    route: 290,
    route_id: 488,
    origin_destination: "HYT NAGAR TO JBS",
  },
  {
    route: 290,
    route_id: 489,
    origin_destination: "JBS TO HYT NAGAR",
  },
  {
    route: "299D",
    route_id: 1313,
    origin_destination: "HAYAT NAGAR TO DILSUKH NAGAR",
  },
  {
    route: "299D",
    route_id: 1314,
    origin_destination: "DILSHUKNAGAR TO HYT NAGAR",
  },
  {
    route: "299M",
    route_id: 571,
    origin_destination: "HAYAT NAGAR TO MEHDIPATNAM",
  },
  {
    route: "299M",
    route_id: 572,
    origin_destination: "MEHDIPATNAM TO HAYAT NAGAR",
  },
  {
    route: 300,
    route_id: 90,
    origin_destination: "MEHADIPATNAM TO UPPAL",
  },
  {
    route: 300,
    route_id: 101,
    origin_destination: "UPPAL X ROADS TO MEHADIPATNAM",
  },
  {
    route: 589,
    route_id: 1424,
    origin_destination: "SECUNDERABAD TO RAMAYANPET",
  },
  {
    route: 589,
    route_id: 1428,
    origin_destination: "RAMAYANPET TO Secunderabad",
  },
  {
    route: "CHEVELLA",
    route_id: 273,
    origin_destination: "MEHDIPATNAM TO MSRD2 DEPOT",
  },
  {
    route: "CHEVELLA",
    route_id: 274,
    origin_destination: "MEHDIPATNAM TO CHEVELLA",
  },
  {
    route: "CHEVELLA",
    route_id: 275,
    origin_destination: "CHEVELLA TO MEHDIPATANAM",
  },
];

export default busData;
