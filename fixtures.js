// ── Single source of truth for all fixtures ───────────────────────────────────
// Edit ONLY this file when adding rounds, results, venues or times.
// All pages (team-manager, match-stats, availability forms, home) load this.
const SEASON_FIXTURES = {
  seahorses: [
    { round:1,  isoDate:'2026-04-24', opponent:'Burraneer Gold',        date:'Fri 24 Apr',  venue:'John Dwyer Park',           time:'7:10pm',  result:'L 41–12' },
    { round:2,  isoDate:'2026-05-01', opponent:'Clovelly Eagles Blue',  date:'Fri 1 May',   venue:'Nagle Park Field 2',        time:'5:30pm',  result:'W 36–12' },
    { round:3,  isoDate:'2026-05-08', opponent:'Rockdale',              date:'Fri 8 May',   venue:'C.A Redmond Oval',          time:'7:20pm',  result:'L 36–12' },
    { round:4,  isoDate:'2026-05-15', opponent:'Burraneer Blue',        date:'Fri 15 May',  venue:'Nagle Park Field 1',        time:'7:20pm',  result:'W 31–19' },
    { round:5,  isoDate:'2026-05-22', opponent:'Maroubra Missiles',     date:'Fri 22 May',  venue:'Nagle Park Field 2',        time:'5:30pm',  result:'L 36–12' },
    { round:6,  isoDate:'2026-05-29', opponent:'Oatley',                date:'Fri 29 May',  venue:'Nagle Park Field 2',        time:'5:30pm',  result:'Washout' },
    { round:7,  isoDate:'2026-06-12', opponent:'Clovelly Eagles White', date:'Fri 12 Jun',  venue:'Nagle Park Field 1',        time:'8:00pm',  result:'W 54–0'  },
    { round:8,  isoDate:'2026-06-19', opponent:'Burraneer Gold',        date:'Fri 19 Jun',  venue:'Nagle Park Field 1',        time:'8:00pm',  result:'L 21–35' },
    { round:9,  isoDate:'2026-07-24', opponent:'Clovelly Eagles Blue',  date:'Fri 24 Jul',  venue:'Nagle Park Field 2',        time:'5:20pm',  result:'' },
    { round:10, isoDate:'2026-07-31', opponent:'Rockdale',              date:'Fri 31 Jul',  venue:'Nagle Park Field 1',        time:'6:20pm',  result:'' },
  ],
  barbarians: [
    { round:1,  isoDate:'2026-04-26', opponent:'Hunters Hill Black',    date:'Sun 26 Apr',  venue:'Boronia Park Field 1',      time:'9:30am',  result:'W 26–5'  },
    { round:2,  isoDate:'2026-05-03', opponent:'Norths Pirates',        date:'Sun 3 May',   venue:'Nagle Park Field 1',        time:'11:00am', result:'L 14–29' },
    { round:3,  isoDate:'2026-05-10', opponent:'Wakehurst',             date:'Sun 10 May',  venue:'Wakehurst Rugby Park',      time:'9:50am',  result:'D 26–26' },
    { round:4,  isoDate:'2026-05-17', opponent:'Wahroonga Gold',        date:'Sun 17 May',  venue:'Nagle Park Field 1',        time:'9:10am',  result:'W 36–7'  },
    { round:5,  isoDate:'2026-05-24', opponent:'Mosman Dolphins',       date:'Sun 24 May',  venue:'Nagle Park Field 2',        time:'9:00am',  result:'W 43–5'  },
    { round:6,  isoDate:'2026-05-31', opponent:'Hornsby Lions',         date:'Sun 31 May',  venue:'Mark Taylor Oval, Waitara', time:'9:30am',  result:'Washout' },
    { round:7,  isoDate:'2026-06-14', opponent:'Allambie Green',        date:'Sun 14 Jun',  venue:'Nagle Park Field 2',        time:'10:00am', result:'W 28–24' },
    { round:8,  isoDate:'2026-06-21', opponent:'Hunters Hill Black',    date:'Sun 21 Jun',  venue:'Nagle Park Field 2',        time:'10:00am', result:'W 28–0'  },
    { round:9,  isoDate:'2026-07-26', opponent:'Norths Pirates',        date:'Sun 26 Jul',  venue:'Tunks Park 3',              time:'10:20am', result:'' },
    { round:10, isoDate:'2026-08-02', opponent:'Wakehurst',             date:'Sun 2 Aug',   venue:'Nagle Park Field 2',        time:'10:00am', result:'' },
  ]
};
