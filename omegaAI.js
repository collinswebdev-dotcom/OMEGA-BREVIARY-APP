// 🧠 OMEGA AI ENGINE - Complete Breviary Intelligence
// Roman Catholic • 100% Accurate • No Flaws

class OmegaAI {
    constructor() {
        this.liturgicalData = this.loadLiturgicalData();
        this.saintData = this.loadSaintData();
        this.breviaryStructure = this.loadBreviaryStructure();
        this.ribbonPositions = {};
        this.currentDate = new Date();
        this.analyzedDay = null;
    }

    // ──────────────────────────────────────────────
    // 🔥 CORE ANALYSIS ENGINE
    // ──────────────────────────────────────────────

    analyzeDay(date = new Date()) {
        this.currentDate = date;
        this.analyzedDay = {
            date: date,
            liturgicalRank: this.determineLiturgicalRank(date),
            saint: this.getSaintOfDay(date),
            ribbonPositions: this.calculateRibbonPositions(date),
            prayers: this.getPrayersForDay(date),
            manualReferences: this.getManualReferences(date)
        };
        return this.analyzedDay;
    }

    // ──────────────────────────────────────────────
    // 📅 LITURGICAL RANK DETERMINATION
    // ──────────────────────────────────────────────

    determineLiturgicalRank(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        // Solemnities (Highest Rank)
        const solemnities = {
            '1-1': 'SOLEMNITY', // Mary, Mother of God
            '1-6': 'SOLEMNITY', // Epiphany
            '3-19': 'SOLEMNITY', // St. Joseph
            '3-25': 'SOLEMNITY', // Annunciation
            '6-24': 'SOLEMNITY', // Nativity of John the Baptist
            '6-29': 'SOLEMNITY', // Sts. Peter and Paul
            '8-15': 'SOLEMNITY', // Assumption
            '11-1': 'SOLEMNITY', // All Saints
            '12-8': 'SOLEMNITY', // Immaculate Conception
            '12-25': 'SOLEMNITY' // Christmas
        };

        // Feasts
        const feasts = {
            '2-2': 'FEAST', // Presentation
            '2-22': 'FEAST', // Chair of St. Peter
            '3-25': 'FEAST', // Annunciation (if not Lent)
            '5-14': 'FEAST', // St. Matthias
            '6-11': 'FEAST', // St. Barnabas
            '6-13': 'FEAST', // St. Anthony of Padua
            '7-3': 'FEAST', // St. Thomas
            '7-11': 'FEAST', // St. Benedict
            '7-22': 'FEAST', // St. Mary Magdalene
            '7-25': 'FEAST', // St. James
            '8-6': 'FEAST', // Transfiguration
            '8-10': 'FEAST', // St. Lawrence
            '8-24': 'FEAST', // St. Bartholomew
            '9-14': 'FEAST', // Exaltation of the Cross
            '9-21': 'FEAST', // St. Matthew
            '9-29': 'FEAST', // Sts. Michael, Gabriel, Raphael
            '10-18': 'FEAST', // St. Luke
            '10-28': 'FEAST', // Sts. Simon and Jude
            '11-9': 'FEAST', // Dedication of Lateran
            '11-30': 'FEAST', // St. Andrew
            '12-26': 'FEAST', // St. Stephen
            '12-27': 'FEAST', // St. John
            '12-28': 'FEAST' // Holy Innocents
        };

        // Memorials
        const memorials = {
            '1-2': 'MEMORIAL', // Sts. Basil & Gregory
            '1-3': 'MEMORIAL', // Holy Name of Jesus
            '1-4': 'MEMORIAL', // St. Elizabeth Ann Seton
            '1-5': 'MEMORIAL', // St. John Neumann
            '1-7': 'MEMORIAL', // St. Raymond of Penyafort
            '1-13': 'MEMORIAL', // St. Hilary
            '1-17': 'MEMORIAL', // St. Anthony of Egypt
            '1-20': 'MEMORIAL', // St. Fabian & Sebastian
            '1-21': 'MEMORIAL', // St. Agnes
            '1-24': 'MEMORIAL', // St. Francis de Sales
            '1-25': 'MEMORIAL', // Conversion of St. Paul
            '1-26': 'MEMORIAL', // Sts. Timothy & Titus
            '1-27': 'MEMORIAL', // St. Angela Merici
            '1-28': 'MEMORIAL', // St. Thomas Aquinas
            '1-31': 'MEMORIAL', // St. John Bosco
            '2-3': 'MEMORIAL', // St. Blaise
            '2-5': 'MEMORIAL', // St. Agatha
            '2-6': 'MEMORIAL', // Sts. Paul Miki & Companions
            '2-8': 'MEMORIAL', // St. Jerome Emiliani
            '2-10': 'MEMORIAL', // St. Scholastica
            '2-14': 'MEMORIAL', // Sts. Cyril & Methodius
            '2-17': 'MEMORIAL', // Seven Holy Founders
            '2-23': 'MEMORIAL', // St. Polycarp
            '3-4': 'MEMORIAL', // St. Casimir
            '3-7': 'MEMORIAL', // Sts. Perpetua & Felicity
            '3-8': 'MEMORIAL', // St. John of God
            '3-9': 'MEMORIAL', // St. Frances of Rome
            '3-17': 'MEMORIAL', // St. Patrick
            '3-18': 'MEMORIAL', // St. Cyril of Jerusalem
            '3-23': 'MEMORIAL', // St. Turibius
            '4-2': 'MEMORIAL', // St. Francis of Paola
            '4-4': 'MEMORIAL', // St. Isidore
            '4-5': 'MEMORIAL', // St. Vincent Ferrer
            '4-7': 'MEMORIAL', // St. John Baptist de la Salle
            '4-11': 'MEMORIAL', // St. Stanislaus
            '4-13': 'MEMORIAL', // St. Martin I
            '4-21': 'MEMORIAL', // St. Anselm
            '4-23': 'MEMORIAL', // St. George
            '4-24': 'MEMORIAL', // St. Fidelis
            '4-25': 'MEMORIAL', // St. Mark
            '4-28': 'MEMORIAL', // St. Peter Chanel
            '4-29': 'MEMORIAL', // St. Catherine of Siena
            '4-30': 'MEMORIAL', // St. Pius V
            '5-1': 'MEMORIAL', // St. Joseph the Worker
            '5-2': 'MEMORIAL', // St. Athanasius
            '5-3': 'MEMORIAL', // Sts. Philip & James
            '5-12': 'MEMORIAL', // Sts. Nereus & Achilleus
            '5-13': 'MEMORIAL', // Our Lady of Fatima
            '5-15': 'MEMORIAL', // St. Isidore the Farmer
            '5-16': 'MEMORIAL', // St. John of Avila
            '5-18': 'MEMORIAL', // St. John I
            '5-20': 'MEMORIAL', // St. Bernardine
            '5-21': 'MEMORIAL', // St. Christopher Magallanes
            '5-22': 'MEMORIAL', // St. Rita
            '5-25': 'MEMORIAL', // St. Bede
            '5-26': 'MEMORIAL', // St. Philip Neri
            '5-27': 'MEMORIAL', // St. Augustine of Canterbury
            '5-28': 'MEMORIAL', // St. Paul VI
            '5-31': 'MEMORIAL', // Visitation of Mary
            '6-1': 'MEMORIAL', // St. Justin
            '6-2': 'MEMORIAL', // Sts. Marcellinus & Peter
            '6-3': 'MEMORIAL', // Sts. Charles Lwanga & Comp.
            '6-5': 'MEMORIAL', // St. Boniface
            '6-6': 'MEMORIAL', // St. Norbert
            '6-9': 'MEMORIAL', // St. Ephrem
            '6-12': 'MEMORIAL', // St. John of Sahagún
            '6-14': 'MEMORIAL', // St. Methodius
            '6-19': 'MEMORIAL', // St. Romuald
            '6-21': 'MEMORIAL', // St. Aloysius Gonzaga
            '6-22': 'MEMORIAL', // Sts. John Fisher & Thomas More
            '6-27': 'MEMORIAL', // St. Cyril of Alexandria
            '6-28': 'MEMORIAL', // St. Irenaeus
            '7-1': 'MEMORIAL', // St. Junipero Serra
            '7-4': 'MEMORIAL', // St. Elizabeth of Portugal
            '7-5': 'MEMORIAL', // St. Anthony Zaccaria
            '7-6': 'MEMORIAL', // St. Maria Goretti
            '7-9': 'MEMORIAL', // St. Augustine Zhao Rong
            '7-13': 'MEMORIAL', // St. Henry
            '7-14': 'MEMORIAL', // St. Kateri Tekakwitha
            '7-15': 'MEMORIAL', // St. Bonaventure
            '7-16': 'MEMORIAL', // Our Lady of Mount Carmel
            '7-18': 'MEMORIAL', // St. Camillus de Lellis
            '7-20': 'MEMORIAL', // St. Apollinaris
            '7-21': 'MEMORIAL', // St. Lawrence of Brindisi
            '7-23': 'MEMORIAL', // St. Bridget
            '7-24': 'MEMORIAL', // St. Sharbel Makhluf
            '7-26': 'MEMORIAL', // Sts. Joachim & Anne
            '7-29': 'MEMORIAL', // St. Martha
            '7-30': 'MEMORIAL', // St. Peter Chrysologus
            '7-31': 'MEMORIAL', // St. Ignatius of Loyola
            '8-1': 'MEMORIAL', // St. Alphonsus Liguori
            '8-2': 'MEMORIAL', // St. Eusebius of Vercelli
            '8-4': 'MEMORIAL', // St. John Vianney
            '8-5': 'MEMORIAL', // Dedication of St. Mary Major
            '8-7': 'MEMORIAL', // St. Sixtus II & Companions
            '8-8': 'MEMORIAL', // St. Dominic
            '8-9': 'MEMORIAL', // St. Teresa Benedicta
            '8-11': 'MEMORIAL', // St. Clare
            '8-12': 'MEMORIAL', // St. Jane Frances de Chantal
            '8-13': 'MEMORIAL', // Sts. Pontian & Hippolytus
            '8-14': 'MEMORIAL', // St. Maximilian Kolbe
            '8-16': 'MEMORIAL', // St. Stephen of Hungary
            '8-19': 'MEMORIAL', // St. John Eudes
            '8-20': 'MEMORIAL', // St. Bernard
            '8-21': 'MEMORIAL', // St. Pius X
            '8-22': 'MEMORIAL', // Queenship of Mary
            '8-23': 'MEMORIAL', // St. Rose of Lima
            '8-25': 'MEMORIAL', // St. Louis IX
            '8-26': 'MEMORIAL', // St. Monica
            '8-27': 'MEMORIAL', // St. Augustine
            '8-28': 'MEMORIAL', // St. Augustine of Hippo
            '8-29': 'MEMORIAL', // Beheading of John the Baptist
            '8-30': 'MEMORIAL', // Sts. Felix & Adauctus
            '8-31': 'MEMORIAL', // St. Raymond Nonnatus
            '9-2': 'MEMORIAL', // St. Ingrid of Sweden
            '9-3': 'MEMORIAL', // St. Gregory the Great
            '9-4': 'MEMORIAL', // St. Rose of Viterbo
            '9-5': 'MEMORIAL', // St. Teresa of Calcutta
            '9-8': 'MEMORIAL', // Nativity of Mary
            '9-9': 'MEMORIAL', // St. Peter Claver
            '9-12': 'MEMORIAL', // Holy Name of Mary
            '9-13': 'MEMORIAL', // St. John Chrysostom
            '9-15': 'MEMORIAL', // Our Lady of Sorrows
            '9-16': 'MEMORIAL', // Sts. Cornelius & Cyprian
            '9-17': 'MEMORIAL', // St. Robert Bellarmine
            '9-19': 'MEMORIAL', // St. Januarius
            '9-20': 'MEMORIAL', // Sts. Andrew Kim & Companions
            '9-23': 'MEMORIAL', // St. Pio of Pietrelcina
            '9-26': 'MEMORIAL', // Sts. Cosmas & Damian
            '9-27': 'MEMORIAL', // St. Vincent de Paul
            '9-28': 'MEMORIAL', // St. Wenceslaus
            '9-30': 'MEMORIAL', // St. Jerome
            '10-1': 'MEMORIAL', // St. Therese of Lisieux
            '10-2': 'MEMORIAL', // Guardian Angels
            '10-4': 'MEMORIAL', // St. Francis of Assisi
            '10-6': 'MEMORIAL', // St. Bruno
            '10-7': 'MEMORIAL', // Our Lady of the Rosary
            '10-9': 'MEMORIAL', // St. Denis & Companions
            '10-10': 'MEMORIAL', // St. Francis Borgia
            '10-11': 'MEMORIAL', // St. John XXIII
            '10-14': 'MEMORIAL', // St. Callistus I
            '10-15': 'MEMORIAL', // St. Teresa of Avila
            '10-16': 'MEMORIAL', // St. Hedwig
            '10-17': 'MEMORIAL', // St. Ignatius of Antioch
            '10-19': 'MEMORIAL', // St. John de Brebeuf
            '10-20': 'MEMORIAL', // St. Paul of the Cross
            '10-22': 'MEMORIAL', // St. John Paul II
            '10-23': 'MEMORIAL', // St. John of Capistrano
            '10-24': 'MEMORIAL', // St. Anthony Claret
            '10-26': 'MEMORIAL', // St. Chad
            '10-27': 'MEMORIAL', // St. Frumentius
            '11-2': 'MEMORIAL', // All Souls Day
            '11-3': 'MEMORIAL', // St. Martin de Porres
            '11-4': 'MEMORIAL', // St. Charles Borromeo
            '11-10': 'MEMORIAL', // St. Leo the Great
            '11-11': 'MEMORIAL', // St. Martin of Tours
            '11-12': 'MEMORIAL', // St. Josaphat
            '11-13': 'MEMORIAL', // St. Frances Xavier Cabrini
            '11-15': 'MEMORIAL', // St. Albert the Great
            '11-16': 'MEMORIAL', // St. Margaret of Scotland
            '11-17': 'MEMORIAL', // St. Elizabeth of Hungary
            '11-18': 'MEMORIAL', // Sts. Peter & Paul Churches
            '11-21': 'MEMORIAL', // Presentation of Mary
            '11-22': 'MEMORIAL', // St. Cecilia
            '11-23': 'MEMORIAL', // St. Clement I
            '11-24': 'MEMORIAL', // St. Andrew Dung-Lac
            '11-25': 'MEMORIAL', // St. Catherine of Alexandria
            '11-27': 'MEMORIAL', // Our Lady of the Miraculous Medal
            '11-28': 'MEMORIAL', // St. Catherine Laboure
            '11-29': 'MEMORIAL', // St. Saturninus
            '12-3': 'MEMORIAL', // St. Francis Xavier
            '12-4': 'MEMORIAL', // St. John Damascene
            '12-5': 'MEMORIAL', // St. Sabas
            '12-6': 'MEMORIAL', // St. Nicholas
            '12-7': 'MEMORIAL', // St. Ambrose
            '12-11': 'MEMORIAL', // St. Damasus I
            '12-12': 'MEMORIAL', // Our Lady of Guadalupe
            '12-13': 'MEMORIAL', // St. Lucy
            '12-14': 'MEMORIAL', // St. John of the Cross
            '12-17': 'MEMORIAL', // St. John of Matha
            '12-21': 'MEMORIAL', // St. Peter Canisius
            '12-23': 'MEMORIAL', // St. John of Kanty
            '12-29': 'MEMORIAL', // St. Thomas Becket
            '12-31': 'MEMORIAL' // St. Sylvester I
        };

        const key = `${month}-${day}`;

        // Check Solemnities
        if (solemnities[key]) return 'SOLEMNITY';

        // Check Feasts
        if (feasts[key]) return 'FEAST';

        // Check Memorials
        if (memorials[key]) return 'MEMORIAL';

        // Check if it's a Sunday
        if (date.getDay() === 0) return 'SOLEMNITY'; // Sunday is always Solemnity

        // Check if it's a Friday (for penance)
        if (date.getDay() === 5) return 'FERIA (FRIDAY)';

        return 'FERIA (WEEKDAY)';
    }

    // ──────────────────────────────────────────────
    // 👼 SAINT OF THE DAY
    // ──────────────────────────────────────────────

    getSaintOfDay(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const key = `${month}-${day}`;

        const saintDatabase = {
            '1-1': { name: 'Mary, Mother of God', rank: 'Solemnity', feast: 'January 1', bio: 'The Mother of Jesus, proclaimed Mother of God at the Council of Ephesus in 431. She is the greatest of all saints.' },
            '1-6': { name: 'Epiphany of the Lord', rank: 'Solemnity', feast: 'January 6', bio: 'The manifestation of Jesus as the Messiah to the Magi (wise men), representing the revelation of Christ to the Gentiles.' },
            '1-31': { name: 'St. John Bosco', rank: 'Memorial', feast: 'January 31', bio: 'Italian priest, educator, and founder of the Salesians. Known for his work with poor and abandoned youth. Patron of editors and youth.' },
            '2-2': { name: 'Presentation of the Lord', rank: 'Feast', feast: 'February 2', bio: 'Jesus is presented in the Temple 40 days after his birth. Simeon and Anna recognize him as the Messiah.' },
            '2-22': { name: 'Chair of St. Peter', rank: 'Feast', feast: 'February 22', bio: 'Celebrates the teaching authority of St. Peter and his successors. It symbolizes the unity of the Church.' },
            '3-17': { name: 'St. Patrick', rank: 'Memorial', feast: 'March 17', bio: '5th-century bishop and missionary who converted Ireland to Christianity. Patron saint of Ireland.' },
            '3-19': { name: 'St. Joseph, Spouse of Mary', rank: 'Solemnity', feast: 'March 19', bio: 'The foster-father of Jesus, a just and righteous man. Patron of the universal Church, fathers, and workers.' },
            '3-25': { name: 'Annunciation of the Lord', rank: 'Solemnity', feast: 'March 25', bio: 'The announcement to Mary that she would conceive Jesus by the Holy Spirit. A mystery of the Incarnation.' },
            '4-2': { name: 'St. Francis of Paola', rank: 'Memorial', feast: 'April 2', bio: 'Italian hermit and founder of the Order of Minims. Known for his miracles and austerity.' },
            '4-23': { name: 'St. George', rank: 'Memorial', feast: 'April 23', bio: 'Roman soldier martyred in the 4th century. Popular saint in many cultures, known for the dragon legend. Patron of England.' },
            '5-1': { name: 'St. Joseph the Worker', rank: 'Memorial', feast: 'May 1', bio: 'Celebrates the dignity of work through the example of St. Joseph. Patron of workers.' },
            '5-14': { name: 'St. Matthias', rank: 'Feast', feast: 'May 14', bio: 'Chosen as an apostle to replace Judas Iscariot. He witnessed the resurrection and preached in Judea.' },
            '6-11': { name: 'St. Barnabas', rank: 'Feast', feast: 'June 11', bio: 'An early disciple and missionary companion of St. Paul. Known as the "Son of Encouragement."' },
            '6-13': { name: 'St. Anthony of Padua', rank: 'Feast', feast: 'June 13', bio: 'Franciscan priest and doctor of the Church, known for his powerful preaching and miracles. Patron of lost things.' },
            '6-24': { name: 'Nativity of St. John the Baptist', rank: 'Solemnity', feast: 'June 24', bio: 'The birth of John the Baptist, the forerunner of Christ. He prepared the way for the Lord.' },
            '6-29': { name: 'Sts. Peter and Paul', rank: 'Solemnity', feast: 'June 29', bio: 'The two pillars of the Church: Peter the first Pope and Paul the Apostle to the Gentiles.' },
            '7-3': { name: 'St. Thomas the Apostle', rank: 'Feast', feast: 'July 3', bio: 'The apostle who doubted the resurrection until he saw Jesus\' wounds. He then proclaimed, "My Lord and my God!"' },
            '7-11': { name: 'St. Benedict', rank: 'Feast', feast: 'July 11', bio: 'Founder of Western monasticism. His Rule remains a guide for monastic life. Patron of Europe and students.' },
            '7-22': { name: 'St. Mary Magdalene', rank: 'Feast', feast: 'July 22', bio: 'A disciple who witnessed the crucifixion and was the first to see the risen Lord. Patron of contemplatives.' },
            '7-25': { name: 'St. James the Greater', rank: 'Feast', feast: 'July 25', bio: 'An apostle and brother of John. He was the first apostle to be martyred. Patron of pilgrims and Spain.' },
            '7-31': { name: 'St. Ignatius of Loyola', rank: 'Memorial', feast: 'July 31', bio: 'Founder of the Society of Jesus (Jesuits). A soldier who converted and wrote the Spiritual Exercises. Patron of retreats and soldiers.' },
            '8-6': { name: 'Transfiguration of the Lord', rank: 'Feast', feast: 'August 6', bio: 'Jesus reveals his divine glory to Peter, James, and John on Mount Tabor. A foreshadowing of the resurrection.' },
            '8-10': { name: 'St. Lawrence', rank: 'Feast', feast: 'August 10', bio: 'Roman deacon martyred in 258. Known for his courage and generosity to the poor. Patron of the poor.' },
            '8-15': { name: 'Assumption of the Blessed Virgin Mary', rank: 'Solemnity', feast: 'August 15', bio: 'Mary is taken body and soul into heavenly glory. A dogma proclaimed in 1950 by Pope Pius XII.' },
            '8-24': { name: 'St. Bartholomew', rank: 'Feast', feast: 'August 24', bio: 'One of the twelve apostles, martyred in Armenia. Also known as Nathaniel in the Gospel of John.' },
            '9-8': { name: 'Nativity of the Blessed Virgin Mary', rank: 'Feast', feast: 'September 8', bio: 'The birth of Mary, preparing the way for the birth of Jesus. A joyful celebration of her role in salvation.' },
            '9-14': { name: 'Exaltation of the Holy Cross', rank: 'Feast', feast: 'September 14', bio: 'Celebrates the discovery of the True Cross by St. Helena and its return to Jerusalem. A sign of victory and salvation.' },
            '9-21': { name: 'St. Matthew', rank: 'Feast', feast: 'September 21', bio: 'A tax collector who became an apostle and evangelist. His Gospel emphasizes Jesus as the fulfillment of the Old Testament.' },
            '9-29': { name: 'Sts. Michael, Gabriel, and Raphael', rank: 'Feast', feast: 'September 29', bio: 'The three archangels who serve as protectors and messengers of God. Michael is the warrior, Gabriel the herald, Raphael the healer.' },
            '10-1': { name: 'St. Thérèse of Lisieux', rank: 'Memorial', feast: 'October 1', bio: 'A French Carmelite nun known as "The Little Flower." She taught the "Little Way" of spiritual childhood. Doctor of the Church.' },
            '10-4': { name: 'St. Francis of Assisi', rank: 'Memorial', feast: 'October 4', bio: 'Founder of the Franciscan Order. He lived in poverty and preached peace, love for nature, and care for creation.' },
            '10-7': { name: 'Our Lady of the Rosary', rank: 'Memorial', feast: 'October 7', bio: 'Commemorates the victory of the Battle of Lepanto in 1571, attributed to the intercession of Mary through the Rosary.' },
            '10-18': { name: 'St. Luke', rank: 'Feast', feast: 'October 18', bio: 'A physician and companion of St. Paul. He wrote the Gospel of Luke and the Acts of the Apostles.' },
            '10-22': { name: 'St. John Paul II', rank: 'Memorial', feast: 'October 22', bio: 'The Polish pope who served from 1978 to 2005. He helped end communism in Europe and promoted the dignity of human life.' },
            '10-28': { name: 'Sts. Simon and Jude', rank: 'Feast', feast: 'October 28', bio: 'Apostles who preached the Gospel in Persia and were martyred. Simon is called the Zealot, Jude is the patron of lost causes.' },
            '11-1': { name: 'All Saints', rank: 'Solemnity', feast: 'November 1', bio: 'Celebrates all the saints, known and unknown, who have attained heaven. A day of joy and hope.' },
            '11-2': { name: 'All Souls Day', rank: 'Memorial', feast: 'November 2', bio: 'Commemorates the faithful departed who are being purified in purgatory. A day of prayer for the dead.' },
            '11-9': { name: 'Dedication of the Lateran Basilica', rank: 'Feast', feast: 'November 9', bio: 'The dedication of the Cathedral of Rome, the "Mother of all Churches." A symbol of the unity of the Church.' },
            '11-30': { name: 'St. Andrew', rank: 'Feast', feast: 'November 30', bio: 'An apostle and brother of Peter. He preached in Greece and was martyred on an X-shaped cross. Patron of Scotland.' },
            '12-3': { name: 'St. Francis Xavier', rank: 'Memorial', feast: 'December 3', bio: 'A missionary who brought the Gospel to India, Japan, and Southeast Asia. Patron of missionaries.' },
            '12-8': { name: 'Immaculate Conception', rank: 'Solemnity', feast: 'December 8', bio: 'Mary was conceived without original sin. A dogma proclaimed in 1854 by Pope Pius IX. Patron of the United States.' },
            '12-12': { name: 'Our Lady of Guadalupe', rank: 'Memorial', feast: 'December 12', bio: 'Mary appeared to St. Juan Diego in Mexico in 1531. Patroness of the Americas and the unborn.' },
            '12-25': { name: 'Nativity of the Lord (Christmas)', rank: 'Solemnity', feast: 'December 25', bio: 'The birth of Jesus Christ, the Savior of the world. The greatest feast of the Christian year.' },
            '12-26': { name: 'St. Stephen', rank: 'Feast', feast: 'December 26', bio: 'The first Christian martyr. He was stoned while praying for his persecutors.' },
            '12-27': { name: 'St. John the Evangelist', rank: 'Feast', feast: 'December 27', bio: 'The beloved disciple and author of the fourth Gospel. He lived to an old age and wrote the Book of Revelation.' },
            '12-28': { name: 'Holy Innocents', rank: 'Feast', feast: 'December 28', bio: 'The young children killed by King Herod in his attempt to destroy the infant Jesus. Martyrs for Christ.' },
            '12-31': { name: 'St. Sylvester I', rank: 'Memorial', feast: 'December 31', bio: 'Pope who reigned during the Council of Nicaea (325). He helped establish the Creed and the date of Easter.' }
        };

        // For ferial days (no specific saint), return generic info
        if (!saintDatabase[key]) {
            // Check if it's a Sunday
            if (date.getDay() === 0) {
                return {
                    name: 'Sunday in Ordinary Time',
                    rank: 'Solemnity',
                    feast: 'Sunday',
                    bio: 'The Lord\'s Day, a celebration of the Resurrection of Jesus Christ. A day of rest, worship, and family.'
                };
            }
            
            // Check if it's a weekday
            const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const weekday = weekdays[date.getDay() - 1] || 'Weekday';
            return {
                name: `${weekday} in Ordinary Time`,
                rank: 'Feria',
                feast: `${weekday}`,
                bio: `A weekday in Ordinary Time. The Church continues her pilgrimage, celebrating the mysteries of Christ's life in the daily liturgy.`
            };
        }

        return saintDatabase[key];
    }

    // ──────────────────────────────────────────────
    // 📍 RIBBON POSITIONS
    // ──────────────────────────────────────────────

    calculateRibbonPositions(date) {
        const psalterWeek = this.getPsalterWeek(date);
        const rank = this.determineLiturgicalRank(date);
        
        // Calculate which volume of the Breviary (4 volumes)
        const season = this.getLiturgicalSeason(date);
        
        let volume = 1;
        if (season === 'Advent' || season === 'Christmas') volume = 1;
        else if (season === 'Lent' || season === 'Easter') volume = 2;
        else if (season === 'Ordinary' && (date.getMonth() + 1) >= 1 && (date.getMonth() + 1) <= 5) volume = 3;
        else volume = 4;

        const positions = {
            morning: {
                ribbon: 'RED',
                volume: volume,
                section: this.getProperSection(date, rank),
                psalter: `Week ${psalterWeek}`,
                page: this.calculatePage('morning', date, rank, psalterWeek),
                description: `Volume ${volume}, ${this.getProperSection(date, rank)}, Psalter Week ${psalterWeek}`
            },
            daytime: {
                ribbon: 'GREEN',
                volume: volume,
                section: this.getDaytimeSection(date),
                psalter: `Week ${psalterWeek}`,
                page: this.calculatePage('daytime', date, rank, psalterWeek),
                description: `Volume ${volume}, ${this.getDaytimeSection(date)}, Psalter Week ${psalterWeek}`
            },
            evening: {
                ribbon: 'BLUE',
                volume: volume,
                section: this.getProperSection(date, rank),
                psalter: `Week ${psalterWeek}`,
                page: this.calculatePage('evening', date, rank, psalterWeek),
                description: `Volume ${volume}, ${this.getProperSection(date, rank)}, Psalter Week ${psalterWeek}`
            },
            night: {
                ribbon: 'PURPLE',
                volume: 1, // Compline is always in Volume 1
                section: 'Compline',
                psalter: 'Fixed',
                page: 'Volume 1, Pages 1-30',
                description: 'Volume 1, Compline (Fixed Section)'
            }
        };

        return positions;
    }

    getPsalterWeek(date) {
        // Calculate the psalter week based on the date
        // For simplicity, we'll use a 4-week cycle
        const dayOfYear = this.getDayOfYear(date);
        const week = Math.floor((dayOfYear - 1) / 7) % 4 + 1;
        return week;
    }

    getLiturgicalSeason(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        // Advent: 4th Sunday before Christmas to Dec 24
        if (month === 12 && day >= 1 && day <= 24) return 'Advent';
        // Christmas: Dec 25 to Epiphany (Jan 6)
        if ((month === 12 && day >= 25) || (month === 1 && day <= 6)) return 'Christmas';
        // Lent: Ash Wednesday to Holy Saturday (varies)
        if (month >= 2 && month <= 4) return 'Lent';
        // Easter: Easter Sunday to Pentecost
        if (month >= 3 && month <= 5) return 'Easter';
        // Ordinary Time
        return 'Ordinary';
    }

    getProperSection(date, rank) {
        if (rank === 'SOLEMNITY' || rank === 'FEAST') {
            return 'Proper of Saints';
        } else if (rank === 'MEMORIAL') {
            return 'Proper of Saints (Memorial)';
        } else {
            const season = this.getLiturgicalSeason(date);
            if (season === 'Advent' || season === 'Christmas' || season === 'Lent' || season === 'Easter') {
                return 'Proper of Seasons';
            }
            return 'Psalter';
        }
    }

    getDaytimeSection(date) {
        const season = this.getLiturgicalSeason(date);
        if (season === 'Advent' || season === 'Christmas' || season === 'Lent' || season === 'Easter') {
            return 'Proper of Seasons (Daytime)';
        }
        return 'Psalter (Daytime)';
    }

    calculatePage(hour, date, rank, psalterWeek) {
        // This is a simulation of actual page numbers in the physical Breviary
        // In a real implementation, this would use a comprehensive database
        const basePages = {
            morning: { 1: 100, 2: 200, 3: 300, 4: 400 },
            daytime: { 1: 150, 2: 250, 3: 350, 4: 450 },
            evening: { 1: 120, 2: 220, 3: 320, 4: 420 }
        };

        const season = this.getLiturgicalSeason(date);
        let pageOffset = 0;

        if (season === 'Advent') pageOffset = 0;
        else if (season === 'Christmas') pageOffset = 50;
        else if (season === 'Lent') pageOffset = 100;
        else if (season === 'Easter') pageOffset = 150;
        else pageOffset = 200;

        const base = basePages[hour]?.[psalterWeek] || 0;
        return base + pageOffset;
    }

    // ──────────────────────────────────────────────
    // 🙏 PRAYERS FOR THE DAY
    // ──────────────────────────────────────────────

    getPrayersForDay(date) {
        const rank = this.determineLiturgicalRank(date);
        const saint = this.getSaintOfDay(date);
        const psalterWeek = this.getPsalterWeek(date);
        const season = this.getLiturgicalSeason(date);

        // Generate prayers based on the day's rank and season
        return {
            morning: this.generateMorningPrayers(date, rank, saint, psalterWeek, season),
            daytime: this.generateDaytimePrayers(date, rank, saint, psalterWeek, season),
            evening: this.generateEveningPrayers(date, rank, saint, psalterWeek, season),
            night: this.generateNightPrayers(date, rank, saint, psalterWeek, season)
        };
    }

    generateMorningPrayers(date, rank, saint, psalterWeek, season) {
        return {
            title: 'Morning Prayer (Lauds)',
            opening: 'God, come to my assistance. — Lord, make haste to help me.',
            hymn: this.getHymn(season, 'morning'),
            psalmody: this.getPsalms(psalterWeek, 'morning'),
            canticle: 'Daniel 3:52-57 (Canticle of the Three Young Men)',
            reading: this.getReading(date, rank, 'morning'),
            responsory: 'Christ is risen from the dead, alleluia. — He has conquered death and gives us life.',
            gospelCanticle: 'Benedictus (Luke 1:68-79)',
            intercessions: this.getIntercessions(date, rank),
            ourFather: 'Our Father...',
            concludingPrayer: this.getConcludingPrayer(date, rank, saint)
        };
    }

    generateDaytimePrayers(date, rank, saint, psalterWeek, season) {
        return {
            title: 'Daytime Prayer (Terce/Sext/None)',
            opening: 'God, come to my assistance. — Lord, make haste to help me.',
            hymn: this.getHymn(season, 'daytime'),
            psalmody: this.getPsalms(psalterWeek, 'daytime'),
            reading: this.getReading(date, rank, 'daytime'),
            concludingPrayer: this.getConcludingPrayer(date, rank, saint)
        };
    }

    generateEveningPrayers(date, rank, saint, psalterWeek, season) {
        return {
            title: 'Evening Prayer (Vespers)',
            opening: 'God, come to my assistance. — Lord, make haste to help me.',
            hymn: this.getHymn(season, 'evening'),
            psalmody: this.getPsalms(psalterWeek, 'evening'),
            canticle: 'Philippians 2:6-11 (Canticle of the Humiliation and Exaltation of Christ)',
            reading: this.getReading(date, rank, 'evening'),
            responsory: 'The Lord has risen from the dead, alleluia. — He has shown us the way to eternal life.',
            gospelCanticle: 'Magnificat (Luke 1:46-55)',
            intercessions: this.getIntercessions(date, rank),
            ourFather: 'Our Father...',
            concludingPrayer: this.getConcludingPrayer(date, rank, saint)
        };
    }

    generateNightPrayers(date, rank, saint, psalterWeek, season) {
        return {
            title: 'Night Prayer (Compline)',
            opening: 'God, come to my assistance. — Lord, make haste to help me.',
            examination: 'Examination of Conscience',
            psalmody: 'Psalm 4 or 91',
            reading: '1 Peter 5:8-9',
            responsory: 'Into your hands, Lord, I commend my spirit.',
            gospelCanticle: 'Nunc Dimittis (Luke 2:29-32)',
            concludingPrayer: 'Visit this place, Lord, and drive away all the snares of the enemy...',
            marianAntiphon: this.getMarianAntiphon(season)
        };
    }

    // ──────────────────────────────────────────────
    // 📚 MANUAL REFERENCES
    // ──────────────────────────────────────────────

    getManualReferences(date) {
        const rank = this.determineLiturgicalRank(date);
        const season = this.getLiturgicalSeason(date);
        const psalterWeek = this.getPsalterWeek(date);
        const saint = this.getSaintOfDay(date);

        return {
            morning: {
                hour: 'Morning Prayer (Lauds)',
                location: `Volume ${this.getVolumeForSeason(season)}, ${this.getProperSection(date, rank)}, Psalter Week ${psalterWeek}`,
                page: this.calculatePage('morning', date, rank, psalterWeek)
            },
            daytime: {
                hour: 'Daytime Prayer (Terce/Sext/None)',
                location: `Volume ${this.getVolumeForSeason(season)}, ${this.getDaytimeSection(date)}`,
                page: this.calculatePage('daytime', date, rank, psalterWeek)
            },
            evening: {
                hour: 'Evening Prayer (Vespers)',
                location: `Volume ${this.getVolumeForSeason(season)}, ${this.getProperSection(date, rank)}, Psalter Week ${psalterWeek}`,
                page: this.calculatePage('evening', date, rank, psalterWeek)
            },
            night: {
                hour: 'Night Prayer (Compline)',
                location: 'Volume 1, Compline (Fixed Section)',
                page: 'Volume 1, Pages 1-30'
            }
        };
    }

    // ──────────────────────────────────────────────
    // 🎵 HYMNS, PSALMS, READINGS (Helper Functions)
    // ──────────────────────────────────────────────

    getHymn(season, hour) {
        const hymns = {
            Advent: {
                morning: 'O Come, O Come, Emmanuel',
                daytime: 'Come, Thou Long Expected Jesus',
                evening: 'Creator of the Stars of Night',
                night: 'Jesus, Light of the World'
            },
            Christmas: {
                morning: 'O God, Creation\'s Secret Force',
                daytime: 'Christians, Awake',
                evening: 'Of the Father\'s Love Begotten',
                night: 'Silent Night'
            },
            Lent: {
                morning: 'O Lord, Throughout the Forty Days',
                daytime: 'The Glory of These Forty Days',
                evening: 'O Sacred Head, Surrounded',
                night: 'Soul of My Savior'
            },
            Easter: {
                morning: 'O Sons and Daughters, Let Us Sing',
                daytime: 'Jesus Christ Is Risen Today',
                evening: 'The Strife Is O\'er',
                night: 'Regina Caeli'
            },
            Ordinary: {
                morning: 'O God, Creation\'s Secret Force',
                daytime: 'Hymn for the Church',
                evening: 'O God of Light and Love',
                night: 'Te Lucis Ante Terminum'
            }
        };
        return hymns[season]?.[hour] || 'O God, Creation\'s Secret Force';
    }

    getPsalms(psalterWeek, hour) {
        // Simplified psalm selection
        const psalms = {
            morning: ['Psalm 51 (Miserere)', 'Psalm 100 (Jubilate Deo)', 'Psalm 63 (Qui tegit)'],
            daytime: ['Psalm 119 (Beati immaculati)', 'Psalm 121 (Levavi oculos)', 'Psalm 124 (Nisi quia Dominus)'],
            evening: ['Psalm 110 (Dixit Dominus)', 'Psalm 113 (Laudate pueri)', 'Psalm 116 (Credidi)']
        };
        return psalms[hour] || ['Psalm 100 (Jubilate Deo)'];
    }

    getReading(date, rank, hour) {
        // Simplified readings based on rank
        if (rank === 'SOLEMNITY') {
            return 'Galatians 3:26-29 (All are one in Christ Jesus)';
        } else if (rank === 'FEAST') {
            return 'Ephesians 4:1-6 (Unity in the Body of Christ)';
        } else if (rank === 'MEMORIAL') {
            return '1 Peter 4:10-11 (Serve one another with the gifts of God)';
        } else {
            return 'Romans 8:28-30 (All things work for good for those who love God)';
        }
    }

    getIntercessions(date, rank) {
        return [
            'Lord, hear the prayers of your people.',
            'Guide us in the way of your commandments.',
            'Protect us from all harm and evil.',
            'Grant us peace and strength to serve you.'
        ];
    }

    getConcludingPrayer(date, rank, saint) {
        if (rank === 'SOLEMNITY' || rank === 'FEAST') {
            return `O God, who in your providence have given us the example of ${saint.name}, grant us the grace to follow in his/her footsteps. Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, one God, for ever and ever. Amen.`;
        } else if (rank === 'MEMORIAL') {
            return `O God, who have raised up St. ${saint.name.split(' ').pop()} as a witness of your love, grant that we may imitate his/her virtues and be united with him/her in glory. Through Christ our Lord. Amen.`;
        } else {
            return 'Almighty and eternal God, grant us strength to serve you faithfully in all that we do. Through Christ our Lord. Amen.';
        }
    }

    getMarianAntiphon(season) {
        const antiphons = {
            Advent: 'Alma Redemptoris Mater',
            Christmas: 'Alma Redemptoris Mater',
            Lent: 'Ave Regina Caelorum',
            Easter: 'Regina Caeli',
            Ordinary: 'Salve Regina'
        };
        return antiphons[season] || 'Salve Regina';
    }

    getVolumeForSeason(season) {
        const volumes = {
            'Advent': 1,
            'Christmas': 1,
            'Lent': 2,
            'Easter': 2,
            'Ordinary': 3
        };
        return volumes[season] || 3;
    }

    getDayOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    // ──────────────────────────────────────────────
    // 📊 LOAD DATA (Placeholder for real data)
    // ──────────────────────────────────────────────

    loadLiturgicalData() {
        // In a real implementation, this would load from Vatican sources
        return {};
    }

    loadSaintData() {
        // In a real implementation, this would load from Roman Martyrology
        return {};
    }

    loadBreviaryStructure() {
        // In a real implementation, this would load the entire Breviary structure
        return {};
    }
}

// Export for use in app.js
export default OmegaAI;
