// 🧠 OMEGA AI CALENDAR ENGINE - Complete

const OMEGA_DATA = {
    // Complete Saint Database with Rank & Feast Info
    saints: {
        '1-1': { name: 'Mary, Mother of God', rank: 'SOLEMNITY', bio: 'The Mother of Jesus, proclaimed Mother of God at the Council of Ephesus in 431.', feast: 'Solemnity of Mary' },
        '1-2': { name: 'Sts. Basil the Great & Gregory Nazianzen', rank: 'MEMORIAL', bio: 'Bishops and Doctors of the Church, defenders of the Nicene faith.', feast: 'Memorial of Sts. Basil & Gregory' },
        '1-3': { name: 'Holy Name of Jesus', rank: 'MEMORIAL', bio: 'Celebration of the Holy Name of Jesus, invoked for salvation and protection.', feast: 'Holy Name of Jesus' },
        '1-4': { name: 'St. Elizabeth Ann Seton', rank: 'MEMORIAL', bio: 'Foundress of the American Sisters of Charity, first native-born American saint.', feast: 'St. Elizabeth Ann Seton' },
        '1-5': { name: 'St. John Neumann', rank: 'MEMORIAL', bio: 'Bishop of Philadelphia, known for his work with immigrants and education.', feast: 'St. John Neumann' },
        '1-6': { name: 'Epiphany of the Lord', rank: 'SOLEMNITY', bio: 'The revelation of Christ to the Magi, representing the manifestation to the Gentiles.', feast: 'Epiphany' },
        '1-7': { name: 'St. Raymond of Penyafort', rank: 'MEMORIAL', bio: 'Dominican friar and canon lawyer, patron of canon lawyers.', feast: 'St. Raymond of Penyafort' },
        '1-13': { name: 'St. Hilary of Poitiers', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, defender of the divinity of Christ.', feast: 'St. Hilary of Poitiers' },
        '1-17': { name: 'St. Anthony of Egypt', rank: 'MEMORIAL', bio: 'Father of monasticism, known for his ascetic life and temptations.', feast: 'St. Anthony of Egypt' },
        '1-20': { name: 'St. Fabian & St. Sebastian', rank: 'MEMORIAL', bio: 'Fabian: Pope and martyr. Sebastian: Roman soldier and martyr.', feast: 'Sts. Fabian & Sebastian' },
        '1-21': { name: 'St. Agnes', rank: 'MEMORIAL', bio: 'Roman virgin and martyr, patroness of young girls and purity.', feast: 'St. Agnes' },
        '1-24': { name: 'St. Francis de Sales', rank: 'MEMORIAL', bio: 'Bishop of Geneva, Doctor of the Church, known for his gentle spirituality.', feast: 'St. Francis de Sales' },
        '1-25': { name: 'Conversion of St. Paul', rank: 'FEAST', bio: 'The conversion of Saul of Tarsus on the road to Damascus.', feast: 'Conversion of St. Paul' },
        '1-26': { name: 'Sts. Timothy & Titus', rank: 'MEMORIAL', bio: 'Bishops and companions of St. Paul, leaders of the early Church.', feast: 'Sts. Timothy & Titus' },
        '1-27': { name: 'St. Angela Merici', rank: 'MEMORIAL', bio: 'Foundress of the Ursulines, dedicated to the education of girls.', feast: 'St. Angela Merici' },
        '1-28': { name: 'St. Thomas Aquinas', rank: 'MEMORIAL', bio: 'Dominican friar, Doctor of the Church, greatest theologian of the Middle Ages.', feast: 'St. Thomas Aquinas' },
        '1-31': { name: 'St. John Bosco', rank: 'MEMORIAL', bio: 'Founder of the Salesians, dedicated to educating poor youth.', feast: 'St. John Bosco' },
        
        '2-2': { name: 'Presentation of the Lord', rank: 'FEAST', bio: 'Jesus presented in the Temple; Simeon and Anna recognize the Messiah.', feast: 'Presentation of the Lord' },
        '2-3': { name: 'St. Blaise', rank: 'MEMORIAL', bio: 'Bishop and martyr, known for the blessing of throats.', feast: 'St. Blaise' },
        '2-5': { name: 'St. Agatha', rank: 'MEMORIAL', bio: 'Virgin and martyr, patroness of Sicily and breast cancer patients.', feast: 'St. Agatha' },
        '2-6': { name: 'Sts. Paul Miki & Companions', rank: 'MEMORIAL', bio: 'Japanese martyrs crucified in 1597.', feast: 'Sts. Paul Miki & Companions' },
        '2-8': { name: 'St. Jerome Emiliani', rank: 'MEMORIAL', bio: 'Founder of the Somaschi Fathers, dedicated to orphan care.', feast: 'St. Jerome Emiliani' },
        '2-10': { name: 'St. Scholastica', rank: 'MEMORIAL', bio: 'Benedictine nun and sister of St. Benedict, known for her holiness.', feast: 'St. Scholastica' },
        '2-14': { name: 'Sts. Cyril & Methodius', rank: 'MEMORIAL', bio: 'Brothers who evangelized the Slavs and developed the Cyrillic alphabet.', feast: 'Sts. Cyril & Methodius' },
        '2-17': { name: 'Seven Holy Founders', rank: 'MEMORIAL', bio: 'Founders of the Servite Order, dedicated to Our Lady of Sorrows.', feast: 'Seven Holy Founders' },
        '2-22': { name: 'Chair of St. Peter', rank: 'FEAST', bio: 'Celebrates the teaching authority of Peter and his successors.', feast: 'Chair of St. Peter' },
        '2-23': { name: 'St. Polycarp', rank: 'MEMORIAL', bio: 'Bishop of Smyrna, disciple of St. John, martyr.', feast: 'St. Polycarp' },

        '3-4': { name: 'St. Casimir', rank: 'MEMORIAL', bio: 'Polish prince and patron saint of Lithuania and youth.', feast: 'St. Casimir' },
        '3-7': { name: 'Sts. Perpetua & Felicity', rank: 'MEMORIAL', bio: 'Martyrs in Carthage, known for their courage and faith.', feast: 'Sts. Perpetua & Felicity' },
        '3-8': { name: 'St. John of God', rank: 'MEMORIAL', bio: 'Founder of the Order of Charity for the sick and poor.', feast: 'St. John of God' },
        '3-9': { name: 'St. Frances of Rome', rank: 'MEMORIAL', bio: 'Noblewoman and founder of the Oblates of Mary, known for charity.', feast: 'St. Frances of Rome' },
        '3-17': { name: 'St. Patrick', rank: 'MEMORIAL', bio: 'Bishop and missionary, patron saint of Ireland.', feast: 'St. Patrick' },
        '3-18': { name: 'St. Cyril of Jerusalem', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, known for his catechetical lectures.', feast: 'St. Cyril of Jerusalem' },
        '3-19': { name: 'St. Joseph, Spouse of Mary', rank: 'SOLEMNITY', bio: 'Foster-father of Jesus, patron of the universal Church and workers.', feast: 'Solemnity of St. Joseph' },
        '3-23': { name: 'St. Turibius of Mogrovejo', rank: 'MEMORIAL', bio: 'Archbishop of Lima, known for his work with indigenous peoples.', feast: 'St. Turibius of Mogrovejo' },
        '3-25': { name: 'Annunciation of the Lord', rank: 'SOLEMNITY', bio: 'The announcement to Mary that she would conceive Jesus by the Holy Spirit.', feast: 'Annunciation' },

        '4-2': { name: 'St. Francis of Paola', rank: 'MEMORIAL', bio: 'Hermit and founder of the Order of Minims, known for miracles.', feast: 'St. Francis of Paola' },
        '4-4': { name: 'St. Isidore of Seville', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, known for his encyclopedic work.', feast: 'St. Isidore of Seville' },
        '4-5': { name: 'St. Vincent Ferrer', rank: 'MEMORIAL', bio: 'Dominican preacher, known for converting many through his sermons.', feast: 'St. Vincent Ferrer' },
        '4-7': { name: 'St. John Baptist de la Salle', rank: 'MEMORIAL', bio: 'Founder of the Christian Brothers, dedicated to education.', feast: 'St. John Baptist de la Salle' },
        '4-11': { name: 'St. Stanislaus', rank: 'MEMORIAL', bio: 'Bishop of Krakow, martyr for the faith.', feast: 'St. Stanislaus' },
        '4-13': { name: 'St. Martin I', rank: 'MEMORIAL', bio: 'Pope and martyr who defended the faith against heresy.', feast: 'St. Martin I' },
        '4-21': { name: 'St. Anselm', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, known for his theological works.', feast: 'St. Anselm' },
        '4-23': { name: 'St. George', rank: 'MEMORIAL', bio: 'Roman soldier and martyr, patron saint of England.', feast: 'St. George' },
        '4-24': { name: 'St. Fidelis of Sigmaringen', rank: 'MEMORIAL', bio: 'Capuchin friar and martyr, known for his missionary work.', feast: 'St. Fidelis of Sigmaringen' },
        '4-25': { name: 'St. Mark the Evangelist', rank: 'FEAST', bio: 'Disciple of Peter, author of the Gospel of Mark.', feast: 'St. Mark' },
        '4-28': { name: 'St. Peter Chanel', rank: 'MEMORIAL', bio: 'Marist missionary martyred in the South Pacific.', feast: 'St. Peter Chanel' },
        '4-29': { name: 'St. Catherine of Siena', rank: 'MEMORIAL', bio: 'Doctor of the Church, known for her mystical experiences and influence on the papacy.', feast: 'St. Catherine of Siena' },
        '4-30': { name: 'St. Pius V', rank: 'MEMORIAL', bio: 'Pope who implemented the Council of Trent and reformed the liturgy.', feast: 'St. Pius V' },

        '5-1': { name: 'St. Joseph the Worker', rank: 'MEMORIAL', bio: 'Celebrates the dignity of work through the example of St. Joseph.', feast: 'St. Joseph the Worker' },
        '5-2': { name: 'St. Athanasius', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, defender of the divinity of Christ.', feast: 'St. Athanasius' },
        '5-3': { name: 'Sts. Philip & James', rank: 'FEAST', bio: 'Apostles who preached the Gospel and were martyred.', feast: 'Sts. Philip & James' },
        '5-12': { name: 'Sts. Nereus & Achilleus', rank: 'MEMORIAL', bio: 'Roman soldiers and martyrs.', feast: 'Sts. Nereus & Achilleus' },
        '5-13': { name: 'Our Lady of Fatima', rank: 'MEMORIAL', bio: 'Apparition of Mary to three shepherd children in Portugal in 1917.', feast: 'Our Lady of Fatima' },
        '5-14': { name: 'St. Matthias', rank: 'FEAST', bio: 'Chosen as an apostle to replace Judas Iscariot.', feast: 'St. Matthias' },
        '5-15': { name: 'St. Isidore the Farmer', rank: 'MEMORIAL', bio: 'Patron of farmers and laborers, known for his devotion to prayer.', feast: 'St. Isidore the Farmer' },
        '5-16': { name: 'St. John of Avila', rank: 'MEMORIAL', bio: 'Priest and Doctor of the Church, known for his spiritual direction.', feast: 'St. John of Avila' },
        '5-18': { name: 'St. John I', rank: 'MEMORIAL', bio: 'Pope and martyr, known for his efforts to reconcile the Church.', feast: 'St. John I' },
        '5-20': { name: 'St. Bernardine of Siena', rank: 'MEMORIAL', bio: 'Franciscan preacher, known for his devotion to the Holy Name of Jesus.', feast: 'St. Bernardine of Siena' },
        '5-21': { name: 'St. Christopher Magallanes', rank: 'MEMORIAL', bio: 'Mexican priest and martyr.', feast: 'St. Christopher Magallanes' },
        '5-22': { name: 'St. Rita of Cascia', rank: 'MEMORIAL', bio: 'Augustinian nun, known for her patience and devotion.', feast: 'St. Rita of Cascia' },
        '5-25': { name: 'St. Bede the Venerable', rank: 'MEMORIAL', bio: 'Benedictine monk and Doctor of the Church, known for his historical works.', feast: 'St. Bede' },
        '5-26': { name: 'St. Philip Neri', rank: 'MEMORIAL', bio: 'Founder of the Oratorians, known for his joy and humor.', feast: 'St. Philip Neri' },
        '5-27': { name: 'St. Augustine of Canterbury', rank: 'MEMORIAL', bio: 'Benedictine missionary who brought Christianity to England.', feast: 'St. Augustine of Canterbury' },
        '5-28': { name: 'St. Paul VI', rank: 'MEMORIAL', bio: 'Pope who completed the Second Vatican Council and promoted peace.', feast: 'St. Paul VI' },
        '5-31': { name: 'Visitation of the Blessed Virgin Mary', rank: 'FEAST', bio: 'Mary visits her cousin Elizabeth, who proclaims her blessed.', feast: 'Visitation of Mary' },

        '6-1': { name: 'St. Justin Martyr', rank: 'MEMORIAL', bio: 'Philosopher and martyr, known for his early apologetic works.', feast: 'St. Justin' },
        '6-2': { name: 'Sts. Marcellinus & Peter', rank: 'MEMORIAL', bio: 'Roman martyrs beheaded for their faith.', feast: 'Sts. Marcellinus & Peter' },
        '6-3': { name: 'Sts. Charles Lwanga & Companions', rank: 'MEMORIAL', bio: 'Ugandan martyrs who died for their faith.', feast: 'Sts. Charles Lwanga & Companions' },
        '6-5': { name: 'St. Boniface', rank: 'MEMORIAL', bio: 'Bishop and martyr, known for his missionary work in Germany.', feast: 'St. Boniface' },
        '6-6': { name: 'St. Norbert', rank: 'MEMORIAL', bio: 'Founder of the Premonstratensians, known for his work against heresy.', feast: 'St. Norbert' },
        '6-9': { name: 'St. Ephrem', rank: 'MEMORIAL', bio: 'Deacon and Doctor of the Church, known for his hymns and poetry.', feast: 'St. Ephrem' },
        '6-11': { name: 'St. Barnabas', rank: 'FEAST', bio: 'Apostle and missionary companion of St. Paul, "Son of Encouragement."', feast: 'St. Barnabas' },
        '6-13': { name: 'St. Anthony of Padua', rank: 'FEAST', bio: 'Franciscan preacher and Doctor of the Church, patron of lost items.', feast: 'St. Anthony of Padua' },
        '6-14': { name: 'St. Methodius', rank: 'MEMORIAL', bio: 'Bishop and missionary to the Slavs, brother of St. Cyril.', feast: 'St. Methodius' },
        '6-19': { name: 'St. Romuald', rank: 'MEMORIAL', bio: 'Founder of the Camaldolese order, known for his asceticism.', feast: 'St. Romuald' },
        '6-21': { name: 'St. Aloysius Gonzaga', rank: 'MEMORIAL', bio: 'Jesuit saint known for his purity and care for plague victims.', feast: 'St. Aloysius Gonzaga' },
        '6-22': { name: 'Sts. John Fisher & Thomas More', rank: 'MEMORIAL', bio: 'Martyrs who opposed Henry VIII, known for their integrity and faith.', feast: 'Sts. John Fisher & Thomas More' },
        '6-24': { name: 'Nativity of St. John the Baptist', rank: 'SOLEMNITY', bio: 'The birth of the forerunner of Christ, John the Baptist.', feast: 'Nativity of John the Baptist' },
        '6-27': { name: 'St. Cyril of Alexandria', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, defender of the faith against Nestorianism.', feast: 'St. Cyril of Alexandria' },
        '6-28': { name: 'St. Irenaeus', rank: 'MEMORIAL', bio: 'Bishop and martyr, known for his work against Gnosticism.', feast: 'St. Irenaeus' },
        '6-29': { name: 'Sts. Peter & Paul', rank: 'SOLEMNITY', bio: 'The two pillars of the Church: Peter the first Pope and Paul the Apostle.', feast: 'Sts. Peter & Paul' },

        '7-1': { name: 'St. Junipero Serra', rank: 'MEMORIAL', bio: 'Franciscan missionary who founded the California missions.', feast: 'St. Junipero Serra' },
        '7-3': { name: 'St. Thomas the Apostle', rank: 'FEAST', bio: 'Apostle who doubted the resurrection until he saw Jesus\' wounds.', feast: 'St. Thomas' },
        '7-4': { name: 'St. Elizabeth of Portugal', rank: 'MEMORIAL', bio: 'Queen known for her charity and work for peace.', feast: 'St. Elizabeth of Portugal' },
        '7-5': { name: 'St. Anthony Zaccaria', rank: 'MEMORIAL', bio: 'Founder of the Barnabites, known for his work in reforming the clergy.', feast: 'St. Anthony Zaccaria' },
        '7-6': { name: 'St. Maria Goretti', rank: 'MEMORIAL', bio: 'Young martyr who forgave her attacker, patroness of purity.', feast: 'St. Maria Goretti' },
        '7-9': { name: 'St. Augustine Zhao Rong', rank: 'MEMORIAL', bio: 'Chinese martyr and priest.', feast: 'St. Augustine Zhao Rong' },
        '7-11': { name: 'St. Benedict', rank: 'FEAST', bio: 'Father of Western monasticism, founder of the Benedictine order.', feast: 'St. Benedict' },
        '7-13': { name: 'St. Henry', rank: 'MEMORIAL', bio: 'Holy Roman Emperor, known for his work in evangelizing Eastern Europe.', feast: 'St. Henry' },
        '7-14': { name: 'St. Kateri Tekakwitha', rank: 'MEMORIAL', bio: 'First Native American saint, known for her faith and purity.', feast: 'St. Kateri Tekakwitha' },
        '7-15': { name: 'St. Bonaventure', rank: 'MEMORIAL', bio: 'Franciscan theologian and Doctor of the Church, known for his mystical writings.', feast: 'St. Bonaventure' },
        '7-16': { name: 'Our Lady of Mount Carmel', rank: 'MEMORIAL', bio: 'Celebration of the Carmelite devotion to Mary, with the Brown Scapular.', feast: 'Our Lady of Mount Carmel' },
        '7-18': { name: 'St. Camillus de Lellis', rank: 'MEMORIAL', bio: 'Founder of the Camillians, patron of the sick and hospitals.', feast: 'St. Camillus' },
        '7-20': { name: 'St. Apollinaris', rank: 'MEMORIAL', bio: 'Bishop of Ravenna and martyr.', feast: 'St. Apollinaris' },
        '7-21': { name: 'St. Lawrence of Brindisi', rank: 'MEMORIAL', bio: 'Capuchin friar and Doctor of the Church, known for his preaching.', feast: 'St. Lawrence of Brindisi' },
        '7-22': { name: 'St. Mary Magdalene', rank: 'FEAST', bio: 'A disciple who witnessed the crucifixion and was the first to see the risen Lord.', feast: 'St. Mary Magdalene' },
        '7-23': { name: 'St. Bridget of Sweden', rank: 'MEMORIAL', bio: 'Foundress of the Bridgettines, known for her visions and reforms.', feast: 'St. Bridget of Sweden' },
        '7-24': { name: 'St. Sharbel Makhluf', rank: 'MEMORIAL', bio: 'Maronite monk known for his holiness and miracles.', feast: 'St. Sharbel' },
        '7-25': { name: 'St. James the Greater', rank: 'FEAST', bio: 'Apostle and brother of John, first apostle to be martyred.', feast: 'St. James the Greater' },
        '7-26': { name: 'Sts. Joachim & Anne', rank: 'MEMORIAL', bio: 'Parents of Mary and grandparents of Jesus, honored for their faith.', feast: 'Sts. Joachim & Anne' },
        '7-29': { name: 'St. Martha', rank: 'MEMORIAL', bio: 'Sister of Mary and Lazarus, who served Jesus with hospitality.', feast: 'St. Martha' },
        '7-30': { name: 'St. Peter Chrysologus', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, known for his sermons.', feast: 'St. Peter Chrysologus' },
        '7-31': { name: 'St. Ignatius of Loyola', rank: 'MEMORIAL', bio: 'Founder of the Society of Jesus (Jesuits), author of the Spiritual Exercises.', feast: 'St. Ignatius of Loyola' },

        '8-1': { name: 'St. Alphonsus Liguori', rank: 'MEMORIAL', bio: 'Founder of the Redemptorists, Doctor of the Church known for moral theology.', feast: 'St. Alphonsus Liguori' },
        '8-2': { name: 'St. Eusebius of Vercelli', rank: 'MEMORIAL', bio: 'Bishop who defended the faith against Arianism.', feast: 'St. Eusebius of Vercelli' },
        '8-4': { name: 'St. John Vianney', rank: 'MEMORIAL', bio: 'The Curé of Ars, known for his holiness and work with penitents.', feast: 'St. John Vianney' },
        '8-5': { name: 'Dedication of St. Mary Major', rank: 'MEMORIAL', bio: 'Celebrates the dedication of the Basilica of St. Mary Major in Rome.', feast: 'St. Mary Major' },
        '8-6': { name: 'Transfiguration of the Lord', rank: 'FEAST', bio: 'Jesus reveals his divine glory to Peter, James, and John on Mount Tabor.', feast: 'Transfiguration' },
        '8-7': { name: 'St. Sixtus II & Companions', rank: 'MEMORIAL', bio: 'Pope and companions martyred during the Valerian persecution.', feast: 'St. Sixtus II' },
        '8-8': { name: 'St. Dominic', rank: 'MEMORIAL', bio: 'Founder of the Dominican Order, known for his preaching and devotion to the Rosary.', feast: 'St. Dominic' },
        '8-9': { name: 'St. Teresa Benedicta of the Cross', rank: 'MEMORIAL', bio: 'Carmelite nun, philosopher, and martyr who died at Auschwitz.', feast: 'St. Teresa Benedicta' },
        '8-10': { name: 'St. Lawrence', rank: 'FEAST', bio: 'Roman deacon and martyr, known for his courage and charity.', feast: 'St. Lawrence' },
        '8-11': { name: 'St. Clare', rank: 'MEMORIAL', bio: 'Foundress of the Poor Clares, follower of St. Francis.', feast: 'St. Clare' },
        '8-12': { name: 'St. Jane Frances de Chantal', rank: 'MEMORIAL', bio: 'Foundress of the Visitation Order, known for her patience and charity.', feast: 'St. Jane Frances' },
        '8-13': { name: 'Sts. Pontian & Hippolytus', rank: 'MEMORIAL', bio: 'Pope and antipope who were reconciled and martyred.', feast: 'Sts. Pontian & Hippolytus' },
        '8-14': { name: 'St. Maximilian Kolbe', rank: 'MEMORIAL', bio: 'Franciscan friar and martyr who gave his life for another in Auschwitz.', feast: 'St. Maximilian Kolbe' },
        '8-15': { name: 'Assumption of the Blessed Virgin Mary', rank: 'SOLEMNITY', bio: 'Mary is taken body and soul into heaven, a dogma proclaimed in 1950.', feast: 'Assumption of Mary' },
        '8-16': { name: 'St. Stephen of Hungary', rank: 'MEMORIAL', bio: 'King of Hungary who Christianized his nation.', feast: 'St. Stephen of Hungary' },
        '8-19': { name: 'St. John Eudes', rank: 'MEMORIAL', bio: 'Founder of the Eudists, known for his devotion to the Sacred Heart.', feast: 'St. John Eudes' },
        '8-20': { name: 'St. Bernard of Clairvaux', rank: 'MEMORIAL', bio: 'Cistercian abbot and Doctor of the Church, known for his mystical writings.', feast: 'St. Bernard' },
        '8-21': { name: 'St. Pius X', rank: 'MEMORIAL', bio: 'Pope who promoted liturgical reform and daily Communion.', feast: 'St. Pius X' },
        '8-22': { name: 'Queenship of Mary', rank: 'MEMORIAL', bio: 'Celebrates Mary\'s queenship over heaven and earth.', feast: 'Queenship of Mary' },
        '8-23': { name: 'St. Rose of Lima', rank: 'MEMORIAL', bio: 'First canonized saint of the Americas, known for her asceticism.', feast: 'St. Rose of Lima' },
        '8-24': { name: 'St. Bartholomew', rank: 'FEAST', bio: 'One of the twelve apostles, martyred in Armenia.', feast: 'St. Bartholomew' },
        '8-25': { name: 'St. Louis IX', rank: 'MEMORIAL', bio: 'King of France known for his justice and charity.', feast: 'St. Louis IX' },
        '8-26': { name: 'St. Monica', rank: 'MEMORIAL', bio: 'Mother of St. Augustine, known for her patience and prayer.', feast: 'St. Monica' },
        '8-27': { name: 'St. Monica', rank: 'MEMORIAL', bio: 'Mother of St. Augustine, known for her patience and prayer.', feast: 'St. Monica' },
        '8-28': { name: 'St. Augustine of Hippo', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, one of the greatest theologians in history.', feast: 'St. Augustine' },
        '8-29': { name: 'Beheading of St. John the Baptist', rank: 'MEMORIAL', bio: 'The martyrdom of John the Baptist, the forerunner of Christ.', feast: 'Beheading of John the Baptist' },
        '8-30': { name: 'Sts. Felix & Adauctus', rank: 'MEMORIAL', bio: 'Martyrs who died for their faith in Christ.', feast: 'Sts. Felix & Adauctus' },
        '8-31': { name: 'St. Raymond Nonnatus', rank: 'MEMORIAL', bio: 'Mercedarian friar who ransomed captives.', feast: 'St. Raymond Nonnatus' },

        '9-2': { name: 'St. Ingrid of Sweden', rank: 'MEMORIAL', bio: 'Dominican nun and founder of monasteries in Sweden.', feast: 'St. Ingrid of Sweden' },
        '9-3': { name: 'St. Gregory the Great', rank: 'MEMORIAL', bio: 'Pope and Doctor of the Church, known for his liturgical reforms.', feast: 'St. Gregory the Great' },
        '9-4': { name: 'St. Rose of Viterbo', rank: 'MEMORIAL', bio: 'Franciscan tertiary known for her preaching as a young girl.', feast: 'St. Rose of Viterbo' },
        '9-5': { name: 'St. Teresa of Calcutta', rank: 'MEMORIAL', bio: 'Foundress of the Missionaries of Charity, known for her work with the poor.', feast: 'St. Teresa of Calcutta' },
        '9-8': { name: 'Nativity of the Blessed Virgin Mary', rank: 'FEAST', bio: 'The birth of Mary, preparing the way for the birth of Jesus.', feast: 'Nativity of Mary' },
        '9-9': { name: 'St. Peter Claver', rank: 'MEMORIAL', bio: 'Jesuit missionary who worked with enslaved Africans in South America.', feast: 'St. Peter Claver' },
        '9-12': { name: 'Holy Name of Mary', rank: 'MEMORIAL', bio: 'Celebration of the Holy Name of Mary, invoked for protection.', feast: 'Holy Name of Mary' },
        '9-13': { name: 'St. John Chrysostom', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, known for his eloquent preaching.', feast: 'St. John Chrysostom' },
        '9-14': { name: 'Exaltation of the Holy Cross', rank: 'FEAST', bio: 'Celebrates the discovery of the True Cross and its power of salvation.', feast: 'Exaltation of the Cross' },
        '9-15': { name: 'Our Lady of Sorrows', rank: 'MEMORIAL', bio: 'Celebrates Mary\'s suffering at the cross and her seven sorrows.', feast: 'Our Lady of Sorrows' },
        '9-16': { name: 'Sts. Cornelius & Cyprian', rank: 'MEMORIAL', bio: 'Pope and bishop who defended the faith and were martyred.', feast: 'Sts. Cornelius & Cyprian' },
        '9-17': { name: 'St. Robert Bellarmine', rank: 'MEMORIAL', bio: 'Jesuit and Doctor of the Church, known for his work in theology.', feast: 'St. Robert Bellarmine' },
        '9-19': { name: 'St. Januarius', rank: 'MEMORIAL', bio: 'Bishop and martyr, known for the miraculous liquefaction of his blood.', feast: 'St. Januarius' },
        '9-20': { name: 'Sts. Andrew Kim & Companions', rank: 'MEMORIAL', bio: 'Korean martyrs who died for their faith.', feast: 'Sts. Andrew Kim & Companions' },
        '9-21': { name: 'St. Matthew the Evangelist', rank: 'FEAST', bio: 'Tax collector who became an apostle and author of the first Gospel.', feast: 'St. Matthew' },
        '9-23': { name: 'St. Pio of Pietrelcina', rank: 'MEMORIAL', bio: 'Capuchin friar known for his stigmata and spiritual gifts.', feast: 'St. Pio of Pietrelcina' },
        '9-26': { name: 'Sts. Cosmas & Damian', rank: 'MEMORIAL', bio: 'Physicians who healed the sick and were martyred.', feast: 'Sts. Cosmas & Damian' },
        '9-27': { name: 'St. Vincent de Paul', rank: 'MEMORIAL', bio: 'Founder of the Vincentians, known for his work with the poor.', feast: 'St. Vincent de Paul' },
        '9-28': { name: 'St. Wenceslaus', rank: 'MEMORIAL', bio: 'Duke of Bohemia, martyr who promoted the Christian faith.', feast: 'St. Wenceslaus' },
        '9-29': { name: 'Sts. Michael, Gabriel, & Raphael', rank: 'FEAST', bio: 'The three archangels who serve as protectors and messengers of God.', feast: 'Sts. Michael, Gabriel, & Raphael' },
        '9-30': { name: 'St. Jerome', rank: 'MEMORIAL', bio: 'Priest and Doctor of the Church, translator of the Bible into Latin.', feast: 'St. Jerome' },

        '10-1': { name: 'St. Thérèse of Lisieux', rank: 'MEMORIAL', bio: 'Carmelite nun known as "The Little Flower," Doctor of the Church.', feast: 'St. Thérèse of Lisieux' },
        '10-2': { name: 'Guardian Angels', rank: 'MEMORIAL', bio: 'Celebration of the guardian angels who protect and guide us.', feast: 'Guardian Angels' },
        '10-4': { name: 'St. Francis of Assisi', rank: 'MEMORIAL', bio: 'Founder of the Franciscan Order, known for his love of poverty and creation.', feast: 'St. Francis of Assisi' },
        '10-6': { name: 'St. Bruno', rank: 'MEMORIAL', bio: 'Founder of the Carthusian order, known for his contemplative life.', feast: 'St. Bruno' },
        '10-7': { name: 'Our Lady of the Rosary', rank: 'MEMORIAL', bio: 'Celebrates the victory of Lepanto and the power of the Rosary.', feast: 'Our Lady of the Rosary' },
        '10-9': { name: 'St. Denis & Companions', rank: 'MEMORIAL', bio: 'Martyrs who spread the faith in France.', feast: 'St. Denis & Companions' },
        '10-10': { name: 'St. Francis Borgia', rank: 'MEMORIAL', bio: 'Jesuit priest and missionary, known for his work in the Americas.', feast: 'St. Francis Borgia' },
        '10-11': { name: 'St. John XXIII', rank: 'MEMORIAL', bio: 'Pope who convened the Second Vatican Council.', feast: 'St. John XXIII' },
        '10-14': { name: 'St. Callistus I', rank: 'MEMORIAL', bio: 'Pope and martyr, known for his work in the catacombs.', feast: 'St. Callistus I' },
        '10-15': { name: 'St. Teresa of Avila', rank: 'MEMORIAL', bio: 'Carmelite reformer and Doctor of the Church, known for her mystical experiences.', feast: 'St. Teresa of Avila' },
        '10-16': { name: 'St. Hedwig', rank: 'MEMORIAL', bio: 'Duchess of Silesia, known for her charity and devotion.', feast: 'St. Hedwig' },
        '10-17': { name: 'St. Ignatius of Antioch', rank: 'MEMORIAL', bio: 'Bishop and martyr, known for his letters to the early churches.', feast: 'St. Ignatius of Antioch' },
        '10-18': { name: 'St. Luke the Evangelist', rank: 'FEAST', bio: 'Physician and companion of Paul, author of the Gospel of Luke and Acts.', feast: 'St. Luke' },
        '10-19': { name: 'Sts. Jean de Brébeuf & Companions', rank: 'MEMORIAL', bio: 'Jesuit missionaries martyred in North America.', feast: 'Sts. Jean de Brébeuf & Companions' },
        '10-20': { name: 'St. Paul of the Cross', rank: 'MEMORIAL', bio: 'Founder of the Passionists, known for his devotion to the Passion.', feast: 'St. Paul of the Cross' },
        '10-22': { name: 'St. John Paul II', rank: 'MEMORIAL', bio: 'Pope who helped end communism and promoted the dignity of life.', feast: 'St. John Paul II' },
        '10-23': { name: 'St. John of Capistrano', rank: 'MEMORIAL', bio: 'Franciscan priest and preacher, known for his work against heresy.', feast: 'St. John of Capistrano' },
        '10-24': { name: 'St. Anthony Claret', rank: 'MEMORIAL', bio: 'Founder of the Claretians, known for his missionary work.', feast: 'St. Anthony Claret' },
        '10-26': { name: 'St. Chad', rank: 'MEMORIAL', bio: 'Bishop of Lichfield, known for his humility and holiness.', feast: 'St. Chad' },
        '10-27': { name: 'St. Frumentius', rank: 'MEMORIAL', bio: 'First bishop of Ethiopia, who brought Christianity to the region.', feast: 'St. Frumentius' },
        '10-28': { name: 'Sts. Simon & Jude', rank: 'FEAST', bio: 'Apostles who preached the Gospel and were martyred.', feast: 'Sts. Simon & Jude' },

        '11-1': { name: 'All Saints', rank: 'SOLEMNITY', bio: 'Celebration of all the saints, known and unknown, who have attained heaven.', feast: 'All Saints' },
        '11-2': { name: 'All Souls Day', rank: 'MEMORIAL', bio: 'Commemoration of the faithful departed who are being purified in purgatory.', feast: 'All Souls Day' },
        '11-3': { name: 'St. Martin de Porres', rank: 'MEMORIAL', bio: 'Dominican lay brother known for his charity and healing gifts.', feast: 'St. Martin de Porres' },
        '11-4': { name: 'St. Charles Borromeo', rank: 'MEMORIAL', bio: 'Cardinal and reformer, known for his work in implementing the Council of Trent.', feast: 'St. Charles Borromeo' },
        '11-9': { name: 'Dedication of the Lateran Basilica', rank: 'FEAST', bio: 'The dedication of the Cathedral of Rome, the "Mother of all Churches."', feast: 'Dedication of Lateran' },
        '11-10': { name: 'St. Leo the Great', rank: 'MEMORIAL', bio: 'Pope and Doctor of the Church, who convinced Attila to spare Rome.', feast: 'St. Leo the Great' },
        '11-11': { name: 'St. Martin of Tours', rank: 'MEMORIAL', bio: 'Bishop and missionary, known for his charity and for sharing his cloak.', feast: 'St. Martin of Tours' },
        '11-12': { name: 'St. Josaphat', rank: 'MEMORIAL', bio: 'Bishop and martyr, who worked for the unity of the Church.', feast: 'St. Josaphat' },
        '11-13': { name: 'St. Frances Xavier Cabrini', rank: 'MEMORIAL', bio: 'First American citizen canonized, worked with immigrants.', feast: 'St. Frances Xavier Cabrini' },
        '11-15': { name: 'St. Albert the Great', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, known for his scientific and theological work.', feast: 'St. Albert the Great' },
        '11-16': { name: 'St. Margaret of Scotland', rank: 'MEMORIAL', bio: 'Queen known for her charity and work for the poor.', feast: 'St. Margaret of Scotland' },
        '11-17': { name: 'St. Elizabeth of Hungary', rank: 'MEMORIAL', bio: 'Princess known for her charity to the poor.', feast: 'St. Elizabeth of Hungary' },
        '11-18': { name: 'Sts. Peter & Paul Churches', rank: 'MEMORIAL', bio: 'Celebration of the dedication of the Churches of Peter and Paul in Rome.', feast: 'Sts. Peter & Paul' },
        '11-21': { name: 'Presentation of Mary', rank: 'MEMORIAL', bio: 'Commemorates Mary being presented in the Temple as a young girl.', feast: 'Presentation of Mary' },
        '11-22': { name: 'St. Cecilia', rank: 'MEMORIAL', bio: 'Virgin and martyr, patroness of musicians.', feast: 'St. Cecilia' },
        '11-23': { name: 'St. Clement I', rank: 'MEMORIAL', bio: 'Pope and martyr, known for his letter to the Corinthians.', feast: 'St. Clement I' },
        '11-24': { name: 'St. Andrew Dung-Lac & Companions', rank: 'MEMORIAL', bio: 'Vietnamese martyrs who died for their faith.', feast: 'St. Andrew Dung-Lac' },
        '11-25': { name: 'St. Catherine of Alexandria', rank: 'MEMORIAL', bio: 'Virgin and martyr, known for her wisdom and faith.', feast: 'St. Catherine of Alexandria' },
        '11-27': { name: 'Our Lady of the Miraculous Medal', rank: 'MEMORIAL', bio: 'Celebration of the apparition of Mary to St. Catherine Labouré.', feast: 'Our Lady of the Miraculous Medal' },
        '11-28': { name: 'St. Catherine Labouré', rank: 'MEMORIAL', bio: 'Sister who received the apparition of the Miraculous Medal.', feast: 'St. Catherine Labouré' },
        '11-29': { name: 'St. Saturninus', rank: 'MEMORIAL', bio: 'Bishop and martyr in Toulouse.', feast: 'St. Saturninus' },
        '11-30': { name: 'St. Andrew the Apostle', rank: 'FEAST', bio: 'Apostle and brother of Peter, patron of Scotland.', feast: 'St. Andrew' },

        '12-3': { name: 'St. Francis Xavier', rank: 'MEMORIAL', bio: 'Jesuit missionary who brought the Gospel to India, Japan, and Southeast Asia.', feast: 'St. Francis Xavier' },
        '12-4': { name: 'St. John Damascene', rank: 'MEMORIAL', bio: 'Priest and Doctor of the Church, defender of sacred images.', feast: 'St. John Damascene' },
        '12-5': { name: 'St. Sabas', rank: 'MEMORIAL', bio: 'Monk and founder of monasteries in the Holy Land.', feast: 'St. Sabas' },
        '12-6': { name: 'St. Nicholas', rank: 'MEMORIAL', bio: 'Bishop of Myra, known for his generosity, patron of children.', feast: 'St. Nicholas' },
        '12-7': { name: 'St. Ambrose', rank: 'MEMORIAL', bio: 'Bishop and Doctor of the Church, known for his preaching and hymns.', feast: 'St. Ambrose' },
        '12-8': { name: 'Immaculate Conception', rank: 'SOLEMNITY', bio: 'Mary was conceived without original sin, a dogma proclaimed in 1854.', feast: 'Immaculate Conception' },
        '12-11': { name: 'St. Damasus I', rank: 'MEMORIAL', bio: 'Pope who commissioned the Vulgate translation of the Bible.', feast: 'St. Damasus I' },
        '12-12': { name: 'Our Lady of Guadalupe', rank: 'MEMORIAL', bio: 'Apparition of Mary to St. Juan Diego, patroness of the Americas.', feast: 'Our Lady of Guadalupe' },
        '12-13': { name: 'St. Lucy', rank: 'MEMORIAL', bio: 'Virgin and martyr, patroness of the blind.', feast: 'St. Lucy' },
        '12-14': { name: 'St. John of the Cross', rank: 'MEMORIAL', bio: 'Carmelite reformer and Doctor of the Church, known for his mystical poetry.', feast: 'St. John of the Cross' },
        '12-17': { name: 'St. John of Matha', rank: 'MEMORIAL', bio: 'Founder of the Trinitarians, who worked for the redemption of captives.', feast: 'St. John of Matha' },
        '12-21': { name: 'St. Peter Canisius', rank: 'MEMORIAL', bio: 'Jesuit and Doctor of the Church, known for his work in Germany.', feast: 'St. Peter Canisius' },
        '12-23': { name: 'St. John of Kanty', rank: 'MEMORIAL', bio: 'Polish priest and professor, known for his charity.', feast: 'St. John of Kanty' },
        '12-25': { name: 'Nativity of the Lord (Christmas)', rank: 'SOLEMNITY', bio: 'The birth of Jesus Christ, the Savior of the world.', feast: 'Christmas' },
        '12-26': { name: 'St. Stephen', rank: 'FEAST', bio: 'The first Christian martyr, stoned while praying for his persecutors.', feast: 'St. Stephen' },
        '12-27': { name: 'St. John the Evangelist', rank: 'FEAST', bio: 'The beloved disciple and author of the fourth Gospel.', feast: 'St. John the Evangelist' },
        '12-28': { name: 'Holy Innocents', rank: 'FEAST', bio: 'The young children killed by Herod in his attempt to destroy Jesus.', feast: 'Holy Innocents' },
        '12-29': { name: 'St. Thomas Becket', rank: 'MEMORIAL', bio: 'Archbishop of Canterbury, martyred for his defense of the Church.', feast: 'St. Thomas Becket' },
        '12-31': { name: 'St. Sylvester I', rank: 'MEMORIAL', bio: 'Pope who reigned during the Council of Nicaea.', feast: 'St. Sylvester I' }
    },

    // Breviary Reference Guide
    breviary: {
        volumes: {
            1: 'Advent & Christmas Season',
            2: 'Lent & Easter Season',
            3: 'Ordinary Time (Weeks 1-17)',
            4: 'Ordinary Time (Weeks 18-34)'
        },
        // Abridged Breviary references
        abridged: {
            'morning': 'Christian Prayer (Morning)',
            'daytime': 'Christian Prayer (Daytime)',
            'evening': 'Christian Prayer (Evening)',
            'night': 'Christian Prayer (Night)'
        }
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🧠 OMEGA AI ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

class OmegaCalendar {
    constructor() {
        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        this.currentMonth = this.currentDate.getMonth();
        this.selectedDate = null;
        this.today = new Date();
        this.init();
    }

    init() {
        this.renderCalendar();
        this.setupNavigation();
        this.selectToday();
    }

    getSaintForDate(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const key = `${month}-${day}`;
        
        // Check if saint exists in database
        if (OMEGA_DATA.saints[key]) {
            return OMEGA_DATA.saints[key];
        }
        
        // Check if it's Sunday
        if (date.getDay() === 0) {
            return {
                name: 'Sunday in Ordinary Time',
                rank: 'SOLEMNITY',
                bio: 'The Lord\'s Day, a celebration of the Resurrection of Jesus Christ.',
                feast: 'Sunday'
            };
        }
        
        // Default - Ferial Day
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekday = weekdays[date.getDay() - 1] || 'Weekday';
        return {
            name: `${weekday} in Ordinary Time`,
            rank: 'FERIA',
            bio: 'A weekday in Ordinary Time. The Church continues her pilgrimage, celebrating the mysteries of Christ\'s life in the daily liturgy.',
            feast: `${weekday}`
        };
    }

    getRankColor(rank) {
        const colors = {
            'SOLEMNITY': 'solemnity',
            'FEAST': 'feast',
            'MEMORIAL': 'memorial',
            'FERIA': 'ferial'
        };
        return colors[rank] || 'ferial';
    }

    getBreviaryReference(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfYear = this.getDayOfYear(date);
        const rank = this.getSaintForDate(date).rank;
        const season = this.getLiturgicalSeason(date);
        const psalterWeek = this.getPsalterWeek(date);
        const volume = this.getVolumeForSeason(season);

        // Full Breviary references
        const fullRefs = {
            morning: {
                location: `Volume ${volume}: ${OMEGA_DATA.breviary.volumes[volume]}, Proper ${rank === 'SOLEMNITY' || rank === 'FEAST' ? 'of Saints' : 'of Seasons'}, Psalter Week ${psalterWeek}`,
                page: `Vol ${volume} • Week ${psalterWeek} • ${rank === 'SOLEMNITY' ? 'Solemnity' : rank === 'FEAST' ? 'Feast' : rank === 'MEMORIAL' ? 'Memorial' : 'Ferrial'}`
            },
            daytime: {
                location: `Volume ${volume}: ${OMEGA_DATA.breviary.volumes[volume]}, Daytime Prayer`,
                page: `Vol ${volume} • Psalter Week ${psalterWeek}`
            },
            evening: {
                location: `Volume ${volume}: ${OMEGA_DATA.breviary.volumes[volume]}, Proper ${rank === 'SOLEMNITY' || rank === 'FEAST' ? 'of Saints' : 'of Seasons'}, Psalter Week ${psalterWeek}`,
                page: `Vol ${volume} • Week ${psalterWeek} • ${rank === 'SOLEMNITY' ? 'Solemnity' : rank === 'FEAST' ? 'Feast' : rank === 'MEMORIAL' ? 'Memorial' : 'Ferrial'}`
            },
            night: {
                location: 'Volume 1: Compline (Fixed Section)',
                page: 'Vol 1 • Pages 1-30'
            }
        };

        // Abridged Breviary references
        const abridgedRefs = {
            morning: {
                location: OMEGA_DATA.breviary.abridged.morning,
                page: 'Morning Prayer Section'
            },
            daytime: {
                location: OMEGA_DATA.breviary.abridged.daytime,
                page: 'Daytime Prayer Section'
            },
            evening: {
                location: OMEGA_DATA.breviary.abridged.evening,
                page: 'Evening Prayer Section'
            },
            night: {
                location: OMEGA_DATA.breviary.abridged.night,
                page: 'Night Prayer Section'
            }
        };

        return { full: fullRefs, abridged: abridgedRefs };
    }

    getLiturgicalSeason(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        if (month === 12 && day >= 25) return 'Christmas';
        if ((month === 1 && day <= 6) || (month === 12 && day >= 17 && day <= 24)) return 'Christmas';
        if (month === 12 && day >= 1 && day <= 16) return 'Advent';
        if (month >= 2 && month <= 4) return 'Lent';
        if (month >= 4 && month <= 5) return 'Easter';
        return 'Ordinary';
    }

    getVolumeForSeason(season) {
        const map = {
            'Advent': 1,
            'Christmas': 1,
            'Lent': 2,
            'Easter': 2,
            'Ordinary': 3
        };
        return map[season] || 3;
    }

    getPsalterWeek(date) {
        const dayOfYear = this.getDayOfYear(date);
        return Math.floor((dayOfYear - 1) / 7) % 4 + 1;
    }

    getDayOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 0);
        return Math.floor((date - start) / (1000 * 60 * 60 * 24));
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 📅 CALENDAR RENDER
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    renderCalendar() {
        const grid = document.getElementById('daysGrid');
        const monthDisplay = document.getElementById('currentMonth');
        const yearDisplay = document.getElementById('currentYear');
        
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
        
        monthDisplay.textContent = months[this.currentMonth];
        yearDisplay.textContent = this.currentYear;

        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        
        grid.innerHTML = '';

        // Empty cells for first week
        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            empty.className = 'day-cell empty';
            grid.appendChild(empty);
        }

        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateObj = new Date(this.currentYear, this.currentMonth, day);
            const saint = this.getSaintForDate(dateObj);
            const rankClass = this.getRankColor(saint.rank);
            const isToday = this.isToday(dateObj);
            const isSelected = this.isSelected(dateObj);

            const cell = document.createElement('div');
            cell.className = `day-cell ${rankClass}`;
            if (isToday) cell.classList.add('today');
            if (isSelected) cell.classList.add('selected');

            // Day number
            const daySpan = document.createElement('span');
            daySpan.className = 'day-number';
            daySpan.textContent = day;
            cell.appendChild(daySpan);

            // Feast indicator (if not ferial)
            if (saint.rank !== 'FERIA') {
                const indicator = document.createElement('span');
                indicator.className = 'feast-indicator';
                indicator.textContent = saint.rank === 'SOLEMNITY' ? '🎉' : 
                                        saint.rank === 'FEAST' ? '⭐' : '🕊️';
                cell.appendChild(indicator);
            }

            // Rank dot
            const dot = document.createElement('span');
            dot.className = `rank-dot ${rankClass}`;
            cell.appendChild(dot);

            cell.dataset.date = dateObj.toISOString();
            cell.addEventListener('click', () => this.selectDate(dateObj));

            grid.appendChild(cell);
        }
    }

    isToday(date) {
        return date.toDateString() === this.today.toDateString();
    }

    isSelected(date) {
        return this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🎯 SELECT DATE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    selectDate(date) {
        this.selectedDate = date;
        this.renderCalendar();
        this.updateDetailPanel(date);
    }

    selectToday() {
        this.selectDate(this.today);
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 📋 DETAIL PANEL
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    updateDetailPanel(date) {
        const saint = this.getSaintForDate(date);
        const refs = this.getBreviaryReference(date);
        const rankClass = this.getRankColor(saint.rank);

        // Update header
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('selectedDate').textContent = date.toLocaleDateString('en-US', options);
        
        const badge = document.getElementById('rankBadge');
        badge.textContent = saint.rank;
        badge.className = `rank-badge ${rankClass}`;

        // Update saint
        document.getElementById('saintName').textContent = saint.name;
        document.getElementById('saintBio').textContent = saint.bio;
        document.getElementById('saintFeast').textContent = `📅 ${saint.feast}`;
        document.getElementById('saintRank').textContent = `📜 ${saint.rank}`;

        // Update Breviary references - Full
        document.getElementById('morningLoc').textContent = refs.full.morning.location;
        document.getElementById('morningPage').textContent = `📄 ${refs.full.morning.page}`;
        
        document.getElementById('daytimeLoc').textContent = refs.full.daytime.location;
        document.getElementById('daytimePage').textContent = `📄 ${refs.full.daytime.page}`;
        
        document.getElementById('eveningLoc').textContent = refs.full.evening.location;
        document.getElementById('eveningPage').textContent = `📄 ${refs.full.evening.page}`;
        
        document.getElementById('nightLoc').textContent = refs.full.night.location;
        document.getElementById('nightPage').textContent = `📄 ${refs.full.night.page}`;

        // Update Abridged references
        const abridgedGrid = document.getElementById('abridgedGrid');
        abridgedGrid.innerHTML = `
            <div class="ref-card">
                <span class="hour">🌅 Morning Prayer</span>
                <span class="location">${refs.abridged.morning.location}</span>
                <span class="page">📄 ${refs.abridged.morning.page}</span>
            </div>
            <div class="ref-card">
                <span class="hour">☀️ Daytime Prayer</span>
                <span class="location">${refs.abridged.daytime.location}</span>
                <span class="page">📄 ${refs.abridged.daytime.page}</span>
            </div>
            <div class="ref-card">
                <span class="hour">🌆 Evening Prayer</span>
                <span class="location">${refs.abridged.evening.location}</span>
                <span class="page">📄 ${refs.abridged.evening.page}</span>
            </div>
            <div class="ref-card">
                <span class="hour">🌙 Night Prayer</span>
                <span class="location">${refs.abridged.night.location}</span>
                <span class="page">📄 ${refs.abridged.night.page}</span>
            </div>
        `;
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🧭 NAVIGATION
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    setupNavigation() {
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentMonth--;
            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
            this.renderCalendar();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentMonth++;
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            this.renderCalendar();
        });

        document.getElementById('prevYear').addEventListener('click', () => {
            this.currentYear--;
            this.renderCalendar();
        });

        document.getElementById('nextYear').addEventListener('click', () => {
            this.currentYear++;
            this.renderCalendar();
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🚀 INIT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.addEventListener('DOMContentLoaded', () => {
    const app = new OmegaCalendar();
    window.omegaApp = app;
});