/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import Bondslid from '../api/bondslid/bondslid.model';
import Onderdeel from '../api/onderdeel/onderdeel.model';
import Taak from '../api/taak/taak.model';

Bondslid.find({})
  .then(() => Onderdeel.find({}).remove())
  .then(() => Taak.find({}).remove())
  .then(() => Onderdeel.create({
    titel: 'Campusparade/BBQ',
    omschrijving: 'Fissa',
    start: new Date(2016, 7, 21, 17, 0),
    eind: new Date(2016, 7, 21, 19, 0)
  }, {
    titel: 'Openingsfeest',
    omschrijving: 'Meer fissa',
    start: new Date(2016, 7, 21, 20, 0),
    eind: new Date(2016, 7, 22, 0, 0)
  }, {
    titel: 'Infomarkt',
    omschrijving: 'Markt',
    start: new Date(2016, 7, 22, 16, 15),
    eind: new Date(2016, 7, 22, 17, 0)
  }, {
    titel: 'Bierestafette',
    omschrijving: 'Lekker bav adten',
    start: new Date(2016, 7, 22, 17, 0),
    eind: new Date(2016, 7, 22, 18, 30)
  }, {
    titel: 'Nobelprijzen',
    omschrijving: 'Kansloze drankspelletjes onder adellijke begeleiding',
    start: new Date(2016, 7, 22, 18, 30),
    eind: new Date(2016, 7, 22, 21, 30)
  }, {
    titel: 'Stock Exchange',
    omschrijving: 'SEx maandag',
    start: new Date(2016, 7, 22, 21, 30),
    eind: new Date(2016, 7, 22, 22, 30)
  }, {
    titel: 'De Klittenband',
    omschrijving: 'Bandje!',
    start: new Date(2016, 7, 22, 22, 30),
    eind: new Date(2016, 7, 23, 0, 0)
  }, {
    titel: 'DJ PJ Neon Party',
    omschrijving: 'Deze man!',
    start: new Date(2016, 7, 22, 0, 0),
    eind: new Date(2016, 7, 23, 3, 0)
  }, {
    titel: 'Verenigingendag',
    omschrijving: 'Rondleidingen enzo',
    start: new Date(2016, 7, 23, 16, 15),
    eind: new Date(2016, 7, 23, 17, 0)
  }, {
    titel: 'In Vino Casino',
    omschrijving: 'Wijn en dingen',
    start: new Date(2016, 7, 23, 17, 0),
    eind: new Date(2016, 7, 23, 20, 0)
  }, {
    titel: 'Pullen voor Nullen',
    omschrijving: 'Pulletjes!',
    start: new Date(2016, 7, 23, 20, 0),
    eind: new Date(2016, 7, 23, 22, 30)
  }, {
    titel: 'Partners \'n Shine + FeestDJRuud',
    omschrijving: 'Fissa!',
    start: new Date(2016, 7, 23, 22, 30),
    eind: new Date(2016, 7, 24, 1, 0)
  }, {
    titel: 'DJ Paul',
    omschrijving: 'Fissa!',
    start: new Date(2016, 7, 23, 1, 0),
    eind: new Date(2016, 7, 24, 3, 0)
  }, {
    titel: 'SpoCudag',
    omschrijving: 'Sportief dagje',
    start: new Date(2016, 7, 24, 16, 15),
    eind: new Date(2016, 7, 24, 17, 0)
  }, {
    titel: 'Spelroulette/Hamburgers met korting',
    omschrijving: 'Allemaal leuke dingen',
    start: new Date(2016, 7, 24, 17, 0),
    eind: new Date(2016, 7, 24, 19, 0)
  }, {
    titel: 'Pré-ZomBiFest',
    omschrijving: 'Roel!',
    start: new Date(2016, 7, 24, 19, 0),
    eind: new Date(2016, 7, 24, 21, 30)
  }, {
    titel: 'Stock Exchange',
    omschrijving: 'SEx woensdag',
    start: new Date(2016, 7, 24, 21, 30),
    eind: new Date(2016, 7, 24, 22, 30)
  }, {
    titel: 'Oranje Boeven',
    omschrijving: 'Bandje!',
    start: new Date(2016, 7, 24, 22, 30),
    eind: new Date(2016, 7, 25, 0, 0)
  }, {
    titel: 'Vele Anderen',
    omschrijving: 'Nog meer fissa!',
    start: new Date(2016, 7, 24, 0, 0),
    eind: new Date(2016, 7, 25, 3, 0)
  }, {
    titel: 'Smoothie-/koffiebar',
    omschrijving: 'Lekkere gezonde sappies',
    start: new Date(2016, 7, 25, 16, 15),
    eind: new Date(2016, 7, 25, 18, 0)
  }, {
    titel: 'Escape Room',
    omschrijving: 'Vette puzzels in het pand',
    start: new Date(2016, 7, 25, 18, 0),
    eind: new Date(2016, 7, 25, 20, 0)
  }, {
    titel: 'Brak & Beautiful',
    omschrijving: 'Meer bandje!',
    start: new Date(2016, 7, 25, 20, 0),
    eind: new Date(2016, 7, 25, 22, 0)
  }, {
    titel: 'Woody B',
    omschrijving: 'DJ!',
    start: new Date(2016, 7, 25, 22, 0),
    eind: new Date(2016, 7, 26, 0, 0)
  }, {
    titel: 'Ledenbekendmaking!',
    omschrijving: 'Feest!',
    start: new Date(2016, 7, 25, 0, 0),
    eind: new Date(2016, 7, 26, 0, 30)
  }, {
    titel: 'Slotfeest met MC Menno\'s Eskalation',
    omschrijving:' Eskalatie!',
    start: new Date(2016, 7, 25, 0, 30),
    eind: new Date(2016, 7, 26, 3, 0)
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Campusparade/BBQ'
  }).then((ond, err1) => {
    seedError(err1);

    Taak.create({
      titel: 'BBQ klaarzetten',
      omschrijving: 'BBQ klaarzetten',
      onderdeel: ond._id
    }).then((taak, err2) => {
      seedError(err2);
      ond.taken.push(taak._id);
    })

    .then(() => Taak.create({
      titel: 'Laatste voorbereidingen',
      omschrijving: 'Laatste voorbereidingen',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2);
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Meelopen',
      omschrijving: 'Meelopen parade',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2);
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Openingsfeest'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Meefeesten!',
      omschrijving: 'Bij openingsfeest zijn',
      onderdeel: ond._id
    }).then((taak, err2) => {
      seedError(err2);
      ond.taken.push(taak._id);
    })

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Infomarkt'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'Opbouwen Infomarkt',
      onderdeel: ond._id
    }).then((taak, err2) => {
      seedError(err2);
      ond.taken.push(taak._id);
    })

    .then(() => Taak.create({
      titel: 'Afbouwen',
      omschrijving: 'Afbouwen Infomarkt',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2);
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'aanwezig zijn en lubben',
      omschrijving: 'Lubben tijdens Infomarkt',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Bierestafette'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'Opbouwen Bierestafette',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Afbouwen',
      omschrijving: 'Afbouwen Bierestafette',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Schenkmiepen',
      omschrijving: 'Schenkmiepen Bierestafette',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    omschrijving: 'SEx maandag'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'Opbouwen Stock Exchange maandag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Afbouwen',
      omschrijving: 'Afbouwen Stock Exchange maandag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Achter kassa zitten',
      omschrijving: 'Kassa Stock Exchange maandag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Nobelprijzen'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'Opbouwen Nobelprijzen',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Afbouwen',
      omschrijving: 'Afbouwen Nobelprijzen',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'DJ PJ Neon Party'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Cheapsnack',
      omschrijving: 'Cheapsnack bij Neon Party',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Verenigingendag'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Rondleiden \'s ochtends',
      omschrijving: '\'s Ochtends rondleiden Verenigingendag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Rondleiden \'s middags',
      omschrijving: '\'s Middags rondleiden Verenigingendag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Schieten in de tuin',
      omschrijving: 'Schieten in tuin bij Verenigingendag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'In Vino Casino'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'In Vino Casino opbouwen',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Bij zijn in rokkostuum/galajurk',
      omschrijving: 'Bij In Vino Casino zijn in rokkostuum/galajurk',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Casinospellen begeleiden',
      omschrijving: 'Casinospellen begeleiden',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'DJ Paul'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Cheapsnack',
      omschrijving: 'Cheapsnack bij DJ Paul',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'SpoCudag'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Sportdingen doen',
      omschrijving: 'Sportieve dingen doen op SpoCudag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'Opbouwen SpoCudag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Afbouwen',
      omschrijving: 'Afbouwen SpoCudag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Flyeren na cantus',
      omschrijving: 'Flyeren na cantus',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Zadelhoesjes verspreiden',
      omschrijving: 'Zadelhoesjes verspreiden tijdens SpoCudag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Aanwezig zijn en lubben',
      omschrijving: 'Lubben tijdens SpoCudag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Spelroulette/Hamburgers met korting'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Hamburgers verkopen',
      omschrijving: 'Hamburgers verkopen met korting',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Spellen uitleggen en spelen',
      omschrijving: 'Spelroulette begeleiden',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Pré-ZomBiFest'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'Opbouwen ZomBiFest',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Afbouwen',
      omschrijving: 'Afbouwen ZomBiFest',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    omschrijving: 'SEx woensdag'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'Opbouwen Stock Exchange woensdag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Afbouwen',
      omschrijving: 'Afbouwen Stock Exchange woensdag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => Taak.create({
      titel: 'Achter kassa zitten',
      omschrijving: 'Kassa Stock Exchange woensdag',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Vele Anderen'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Cheapsnack',
      omschrijving: 'Cheapsnack bij Vele Anderen',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Smoothie-/koffiebar'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Uitbrakken bij OWee-brunch',
      omschrijving: 'Uitbrakken bij OWee-brunch',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => Taak.create({
      titel: 'Bar bemannen',
      omschrijving: 'Smoothie-/koffiebar bemannen',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    }))

    .then(() => ond.save())
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Slotfeest met MC Menno\'s Eskalation'
  }).then((ond, err1) => {
    seedError(err1)

    Taak.create({
      titel: 'Cheapsnack',
      omschrijving: 'Cheapsnack bij MC Menno',
      onderdeel: ond._id
    })
    .then((taak, err2) => {
      seedError(err2)
      ond.taken.push(taak._id)
    })

    .then(() => ond.save())
  }))

  function seedError(err) {
    if (err) console.log('ERROR: ' + err);
  }
