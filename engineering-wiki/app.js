const SEARCH_DATA = [
  { title: 'DIN 125-A Sluitring', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-125-a-sluitring.html' },
  { title: 'DIN 127-B Veerring', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-127-b-veerring.html' },
  { title: 'DIN 439-B Zeskantmoer laag', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-439-b-zeskantmoer-laag.html' },
  { title: 'DIN 603 Slotbout', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-603-slotbout.html' },
  { title: 'DIN 912 Inbusbout', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-912-inbusbout.html' },
  { title: 'DIN 931 Zeskantbout', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-931-zeskantbout.html' },
  { title: 'DIN 933 Zeskanttapbout', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-933-zeskanttapbout.html' },
  { title: 'DIN 934 Zeskantmoer', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-934-zeskantmoer.html' },
  { title: 'DIN 985 Zeskantborgmoer', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-985-zeskantborgmoer.html' },
  { title: 'DIN 1587 Dopmoer hoog', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-1587-dopmoer-hoog.html' },
  { title: 'DIN 6334 Zeskantverbindingsmoer', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-6334-zeskantverbindingsmoer.html' },
  { title: 'DIN 7984 Inbusbout lage kop', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-7984-inbusbout-lage-kop.html' },
  { title: 'DIN 7991 Verzonken inbusbout', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-7991-verzonken-inbusbout.html' },
  { title: 'DIN 9021 Carrosseriering', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/din-9021-carrosseriering.html' },
  { title: 'ISO 7380 Bolkopbout', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/iso-7380-bolkopbout.html' },
  { title: 'Kabelwartel kunststof', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/kabelwartel-kunststof.html' },
  { title: 'Blindklinkmoer', category: 'Bevestigingsmateriaal', url: '/engineering-wiki/bevestigingsmateriaal/blindklinkmoer.html' },
  { title: 'Ruko 245048RO Machinetapboos(er)', category: 'Gereedschap afmetingen', url: '/engineering-wiki/gereedschap/ruko-245048ro-machinetapbooser.html' },
  { title: 'Facom 440 steek-ringsleutel', category: 'Gereedschap afmetingen', url: '/engineering-wiki/gereedschap/facom-440-steek-ringsleutel.html' },
  { title: 'Ruko - Flat countersink DIN 373 HSS', category: 'Gereedschap afmetingen', url: '/engineering-wiki/gereedschap/ruko-flat-countersink-din-373-hss.html' },
  { title: 'Facom dop maten', category: 'Gereedschap afmetingen', url: '/engineering-wiki/gereedschap/facom-dop-maten.html' },
  { title: 'Snelheid transportbanden', category: 'Formules', url: '/engineering-wiki/formules/snelheid-transportbanden.html' },
  { title: 'Dertec', category: 'Juffermans Machinebouw', url: '/engineering-wiki/juffermans-machinebouw/dertec.html' },
  { title: 'Minimale zetmaat', category: 'Juffermans Machinebouw', url: '/engineering-wiki/juffermans-machinebouw/minimale-zetmaat.html' },
  { title: 'Insnijding', category: 'Juffermans Machinebouw', url: '/engineering-wiki/juffermans-machinebouw/insnijding.html' },
  { title: 'Zichtzijde aangeven', category: 'Juffermans Machinebouw', url: '/engineering-wiki/juffermans-machinebouw/zichtzijde-aangeven.html' },
  { title: 'Lasneus / tab & slot', category: 'Juffermans Machinebouw', url: '/engineering-wiki/juffermans-machinebouw/lasneus-tab-slot.html' }
];

function initSearch(){
  const input = document.querySelector('#searchInput');
  const results = document.querySelector('#resultList');
  if(!input || !results) return;

  const render = (q='') => {
    const query = q.trim().toLowerCase();
    results.innerHTML = '';
    if(!query) return;
    const hits = SEARCH_DATA.filter(item => `${item.title} ${item.category}`.toLowerCase().includes(query)).slice(0, 30);
    for(const hit of hits){
      const a = document.createElement('a');
      a.className = 'row';
      a.href = hit.url;
      a.innerHTML = `
        <div class="left">
          <p class="name">${hit.title}</p>
          <p class="meta">${hit.category}</p>
        </div>
        <div class="chev">›</div>
      `;
      results.appendChild(a);
    }
  };

  input.addEventListener('input', e => render(e.target.value));
  input.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
      const query = input.value.trim().toLowerCase();
      if(!query) return;
      const hit = SEARCH_DATA.find(item => `${item.title} ${item.category}`.toLowerCase().includes(query));
      if(hit) window.location.href = hit.url;
    }
  });

  document.addEventListener('keydown', e => {
    if(e.key === '/' && document.activeElement !== input){
      e.preventDefault();
      input.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', initSearch);
