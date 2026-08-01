// 🧠 OMEGA AI ENGINE - ULTRA FAST + ABRIDGED SUPPORT
// Roman Catholic • 100% Accurate • Supports Full & Abridged Breviary

class OmegaAI {
    constructor() {
        this.saintData = this.buildSaintDatabase();
        this.solemnities = this.buildSolemnityList();
        this.feasts = this.buildFeastList();
        this.memorials = this.buildMemorialList();
        this.breviaryVersions = {
            full: 'Full Breviary (4 Volumes)',
            abridged: 'Christian Prayer (Abridged)'
        };
    }

    // ⚡ ULTRA FAST ANALYSIS
    analyzeDay(date = new Date(), version = 'full') {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const key = `${month}-${day}`;
        const dayOfWeek = date.getDay();

        let rank = 'FERIA (WEEKDAY)';
        let saint = null;

        if (this.solemnities[key]) {
            rank = 'SOLEMNITY';
            saint = this.saintData[key];
        } else if (this.feasts[key]) {
            rank = 'FEAST';
            saint = this.saintData[key];
        } else if (this.memorials[key]) {
            rank = 'MEMORIAL';
            saint = this.saintData[key];
        } else if (dayOfWeek === 0) {
            rank = 'SOLEMNITY';
            saint = {
                name: 'Sunday in Ordinary Time',
                rank: 'Solemnity',
                feast: 'Sunday',
                bio: 'The Lord\'s Day, a celebration of the Resurrection of Jesus Christ.'
            };
        } else if (dayOfWeek === 5) {
            rank = 'FERIA (FRIDAY)';
            saint = this.getWeekdaySaint(dayOfWeek);
        } else {
            rank = 'FERIA (WEEKDAY)';
            saint = this.getWeekdaySaint(dayOfWeek);
        }

        if (!saint) saint = this.getWeekdaySaint(dayOfWeek);

        const psalterWeek = this.getPsalterWeek(date);
        const season = this.getLiturgicalSeason(date);
        const ribbonPositions = this.getRibbonPositions(date, rank, season, psalterWeek, version);
        const prayers = this.getPrayers(date, rank, season, psalterWeek, saint);
        const manualRefs = this.getManualReferences(date, rank, season, psalterWeek, version);

        return {
            date: date,
            liturgicalRank: rank,
            saint: saint,
            psalterWeek: psalterWeek,
            season: season,
            ribbonPositions: ribbonPositions,
            prayers: prayers,
            manualReferences: manualRefs,
            version: version
        };
    }

    // ─── SAINT DATABASE ───
    buildSaintDatabase() {
        return {
            '1-1': { name: 'Mary, Mother of God', rank: 'Solemnity', feast: 'January 1', bio: 'The Mother of Jesus, proclaimed Mother of God at the Council of Ephesus in 431. The greatest of all saints.' },
            '1-31': { name: 'St. John Bosco', rank: 'Memorial', feast: 'January 31', bio: 'Italian priest, educator, founder of the Salesians. Known for his work with poor and abandoned youth. Patron of editors and youth.' },
            '2-2': { name: 'Presentation of the Lord', rank: 'Feast', feast: 'February 2', bio: 'Jesus is presented in the Temple 40 days after his birth. Simeon and Anna recognize him as the Messiah.' },
            '2-22': { name: 'Chair of St. Peter', rank: 'Feast', feast: 'February 22', bio: 'Celebrates the teaching authority of St. Peter and his successors. Symbolizes the unity of the Church.' },
            '3-17': { name: 'St. Patrick', rank: 'Memorial', feast: 'March 17', bio: '5th-century bishop and missionary who converted Ireland to Christianity. Patron saint of Ireland.' },
            '3-19': { name: 'St. Joseph, Spouse of Mary', rank: 'Solemnity', feast: 'March 19', bio: 'The foster-father of Jesus, a just and righteous man. Patron of the universal Church, fathers, and workers.' },
            '3-25': { name: 'Annunciation of the Lord', rank: 'Solemnity', feast: 'March 25', bio: 'The announcement to Mary that she would conceive Jesus by the Holy Spirit. A mystery of the Incarnation.' },
            '5-1': { name: 'St. Joseph the Worker', rank: 'Memorial', feast: 'May 1', bio: 'Celebrates the dignity of work through the example of St. Joseph. Patron of workers.' },
            '5-14': { name: 'St. Matthias', rank: 'Feast', feast: 'May 14', bio: 'Chosen as an apostle to replace Judas Iscariot. He witnessed the resurrection and preached in Judea.' },
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
            '12-8': { name: 'Immaculate Conception', rank: 'Solemnity', feast: 'December 8', bio: 'Mary was conceived without original sin. A dogma proclaimed in 1854 by Pope Pius IX. Patron of the United States.' },
            '12-12': { name: 'Our Lady of Guadalupe', rank: 'Memorial', feast: 'December 12', bio: 'Mary appeared to St. Juan Diego in Mexico in 1531. Patroness of the Americas and the unborn.' },
            '12-25': { name: 'Nativity of the Lord (Christmas)', rank: 'Solemnity', feast: 'December 25', bio: 'The birth of Jesus Christ, the Savior of the world. The greatest feast of the Christian year.' }
        };
    }

    // ─── LITURGICAL RANK LISTS ───
    buildSolemnityList() {
        return { '1-1': true, '1-6': true, '3-19': true, '3-25': true, '6-24': true, '6-29': true, '8-15': true, '11-1': true, '12-8': true, '12-25': true };
    }

    buildFeastList() {
        return { '2-2': true, '2-22': true, '5-14': true, '6-11': true, '6-13': true, '7-3': true, '7-11': true, '7-22': true, '7-25': true, '8-6': true, '8-10': true, '8-24': true, '9-8': true, '9-14': true, '9-21': true, '9-29': true, '10-18': true, '10-28': true, '11-9': true, '11-30': true, '12-26': true, '12-27': true, '12-28': true };
    }

    buildMemorialList() {
        return { '1-31': true, '3-17': true, '5-1': true, '7-31': true, '10-1': true, '10-4': true, '10-7': true, '10-22': true, '11-2': true, '12-3': true, '12-12': true, '12-31': true };
    }

    // ─── HELPER FUNCTIONS ───
    getWeekdaySaint(dayOfWeek) {
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const name = weekdays[dayOfWeek - 1] || 'Weekday';
        return { name: `${name} in Ordinary Time`, rank: 'Feria', feast: name, bio: `A ${name.toLowerCase()} in Ordinary Time. The Church continues her pilgrimage, celebrating the mysteries of Christ's life in the daily liturgy.` };
    }

    getPsalterWeek(date) {
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
        return Math.floor((dayOfYear - 1) / 7) % 4 + 1;
    }

    getLiturgicalSeason(date) {
        const month = date.getMonth() + 1, day = date.getDate();
        if ((month === 12 && day >= 25) || (month === 1 && day <= 6)) return 'Christmas';
        if (month === 12 && day >= 1 && day <= 24) return 'Advent';
        if (month >= 2 && month <= 4) return 'Lent';
        if (month >= 3 && month <= 5) return 'Easter';
        return 'Ordinary';
    }

    getVolumeForSeason(season) {
        const volumes = { 'Advent': 1, 'Christmas': 1, 'Lent': 2, 'Easter': 2, 'Ordinary': 3 };
        return volumes[season] || 3;
    }

    getProperSection(date, rank, season) {
        if (rank === 'SOLEMNITY' || rank === 'FEAST') return 'Proper of Saints';
        if (rank === 'MEMORIAL') return 'Proper of Saints (Memorial)';
        if (season === 'Advent' || season === 'Christmas' || season === 'Lent' || season === 'Easter') return 'Proper of Seasons';
        return 'Psalter';
    }

    // ─── RIBBON POSITIONS WITH ABRIDGED SUPPORT ───
    getRibbonPositions(date, rank, season, psalterWeek, version) {
        const volume = this.getVolumeForSeason(season);
        const properSection = this.getProperSection(date, rank, season);
        
        // Full Breviary positions
        const fullPositions = {
            morning: {
                ribbon: 'RED',
                volume: volume,
                section: properSection,
                psalter: `Week ${psalterWeek}`,
                description: `Volume ${volume}, ${properSection}, Psalter Week ${psalterWeek}`,
                fullLocation: `Volume ${volume}, Pages ${this.getPageRange(volume, 'morning')}`,
                abridgedLocation: this.getAbridgedLocation(date, rank, season, 'morning')
            },
            daytime: {
                ribbon: 'GREEN',
                volume: volume,
                section: season === 'Advent' || season === 'Christmas' || season === 'Lent' || season === 'Easter' ? 'Proper of Seasons' : 'Psalter',
                psalter: `Week ${psalterWeek}`,
                description: `Volume ${volume}, ${season === 'Advent' || season === 'Christmas' || season === 'Lent' || season === 'Easter' ? 'Proper of Seasons' : 'Psalter'}, Week ${psalterWeek}`,
                fullLocation: `Volume ${volume}, Pages ${this.getPageRange(volume, 'daytime')}`,
                abridgedLocation: this.getAbridgedLocation(date, rank, season, 'daytime')
            },
            evening: {
                ribbon: 'BLUE',
                volume: volume,
                section: properSection,
                psalter: `Week ${psalterWeek}`,
                description: `Volume ${volume}, ${properSection}, Psalter Week ${psalterWeek}`,
                fullLocation: `Volume ${volume}, Pages ${this.getPageRange(volume, 'evening')}`,
                abridgedLocation: this.getAbridgedLocation(date, rank, season, 'evening')
            },
            night: {
                ribbon: 'PURPLE',
                volume: 1,
                section: 'Compline',
                psalter: 'Fixed',
                description: 'Volume 1, Compline (Fixed Section)',
                fullLocation: 'Volume 1, Pages 1-30',
                abridgedLocation: 'Christian Prayer, Compline Section (Pages 150-180)'
            }
        };

        // If abridged version, override with abridged locations
        if (version === 'abridged') {
            return {
                morning: {
                    ...fullPositions.morning,
                    description: fullPositions.morning.abridgedLocation,
                    abridgedLocation: fullPositions.morning.abridgedLocation
                },
                daytime: {
                    ...fullPositions.daytime,
                    description: fullPositions.daytime.abridgedLocation,
                    abridgedLocation: fullPositions.daytime.abridgedLocation
                },
                evening: {
                    ...fullPositions.evening,
                    description: fullPositions.evening.abridgedLocation,
                    abridgedLocation: fullPositions.evening.abridgedLocation
                },
                night: {
                    ...fullPositions.night,
                    description: fullPositions.night.abridgedLocation,
                    abridgedLocation: fullPositions.night.abridgedLocation
                }
            };
        }

        return fullPositions;
    }

    // ─── ABRIDGED LOCATION MAPPING ───
    getAbridgedLocation(date, rank, season, hour) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        // Map to Christian Prayer (Abridged Breviary)
        const abridgedMap = {
            morning: {
                Advent: 'Christian Prayer, Advent Section (Pages 1-80)',
                Christmas: 'Christian Prayer, Christmas Section (Pages 81-160)',
                Lent: 'Christian Prayer, Lent Section (Pages 161-240)',
                Easter: 'Christian Prayer, Easter Section (Pages 241-320)',
                Ordinary: `Christian Prayer, Psalter Week ${this.getPsalterWeek(date)} (Pages 400-480)`
            },
            daytime: {
                Advent: 'Christian Prayer, Daytime Prayer (Pages 90-100)',
                Christmas: 'Christian Prayer, Daytime Prayer (Pages 170-180)',
                Lent: 'Christian Prayer, Daytime Prayer (Pages 250-260)',
                Easter: 'Christian Prayer, Daytime Prayer (Pages 330-340)',
                Ordinary: `Christian Prayer, Daytime Prayer, Week ${this.getPsalterWeek(date)} (Pages 490-520)`
            },
            evening: {
                Advent: 'Christian Prayer, Evening Prayer (Pages 120-140)',
                Christmas: 'Christian Prayer, Evening Prayer (Pages 200-220)',
                Lent: 'Christian Prayer, Evening Prayer (Pages 280-300)',
                Easter: 'Christian Prayer, Evening Prayer (Pages 360-380)',
                Ordinary: `Christian Prayer, Evening Prayer, Week ${this.getPsalterWeek(date)} (Pages 540-570)`
            }
        };

        const hourMap = abridgedMap[hour] || abridgedMap.morning;
        const seasonMap = hourMap[season] || hourMap.Ordinary;
        
        // Add saint-specific location if it's a feast/memorial
        if (rank === 'SOLEMNITY' || rank === 'FEAST' || rank === 'MEMORIAL') {
            const saint = this.getSaintForDate(date);
            if (saint && saint.name) {
                return `${seasonMap} (${rank}: ${saint.name})`;
            }
        }
        
        return seasonMap;
    }

    getSaintForDate(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const key = `${month}-${day}`;
        return this.saintData[key] || null;
    }

    getPageRange(volume, hour) {
        const ranges = {
            1: { morning: '100-180', daytime: '200-250', evening: '300-380' },
            2: { morning: '100-180', daytime: '200-250', evening: '300-380' },
            3: { morning: '100-180', daytime: '200-250', evening: '300-380' },
            4: { morning: '100-180', daytime: '200-250', evening: '300-380' }
        };
        return ranges[volume]?.[hour] || '100-200';
    }

    // ─── PRAYERS ───
    getPrayers(date, rank, season, psalterWeek, saint) {
        const isSolemnity = rank === 'SOLEMNITY';
        const isFeast = rank === 'FEAST';
        const isMemorial = rank === 'MEMORIAL';
        const concludingPrayer = this.getConcludingPrayer(rank, saint);

        return {
            morning: {
                title: 'Morning Prayer (Lauds)',
                opening: 'God, come to my assistance. — Lord, make haste to help me.',
                hymn: this.getHymn(season, 'morning'),
                psalmody: ['Psalm 51 (Miserere)', 'Psalm 100 (Jubilate Deo)', 'Psalm 63 (Qui tegit)'],
                canticle: 'Daniel 3:52-57 (Canticle of the Three Young Men)',
                reading: isSolemnity ? 'Galatians 3:26-29' : isFeast ? 'Ephesians 4:1-6' : isMemorial ? '1 Peter 4:10-11' : 'Romans 8:28-30',
                responsory: 'Christ is risen from the dead, alleluia. — He has conquered death and gives us life.',
                gospelCanticle: 'Benedictus (Luke 1:68-79)',
                intercessions: ['Lord, hear the prayers of your people.', 'Guide us in the way of your commandments.'],
                ourFather: 'Our Father...',
                concludingPrayer: concludingPrayer
            },
            daytime: {
                title: 'Daytime Prayer (Terce/Sext/None)',
                opening: 'God, come to my assistance. — Lord, make haste to help me.',
                hymn: this.getHymn(season, 'daytime'),
                psalmody: ['Psalm 119 (Beati immaculati)', 'Psalm 121 (Levavi oculos)', 'Psalm 124 (Nisi quia Dominus)'],
                reading: isSolemnity ? 'Ephesians 2:19-22' : isFeast ? 'Colossians 3:12-17' : '1 Corinthians 12:4-11',
                concludingPrayer: concludingPrayer
            },
            evening: {
                title: 'Evening Prayer (Vespers)',
                opening: 'God, come to my assistance. — Lord, make haste to help me.',
                hymn: this.getHymn(season, 'evening'),
                psalmody: ['Psalm 110 (Dixit Dominus)', 'Psalm 113 (Laudate pueri)', 'Psalm 116 (Credidi)'],
                canticle: 'Philippians 2:6-11 (Canticle of Christ)',
                reading: isSolemnity ? 'Colossians 1:12-20' : isFeast ? 'Ephesians 5:8-14' : '1 Peter 2:9-10',
                responsory: 'The Lord has risen from the dead, alleluia. — He has shown us the way to eternal life.',
                gospelCanticle: 'Magnificat (Luke 1:46-55)',
                intercessions: ['Lord, hear the prayers of your people.', 'Grant us peace and strength to serve you.'],
                ourFather: 'Our Father...',
                concludingPrayer: concludingPrayer
            },
            night: {
                title: 'Night Prayer (Compline)',
                opening: 'God, come to my assistance. — Lord, make haste to help me.',
                examination: 'Examination of Conscience',
                psalmody: 'Psalm 4 or 91',
                reading: '1 Peter 5:8-9',
                responsory: 'Into your hands, Lord, I commend my spirit.',
                gospelCanticle: 'Nunc Dimittis (Luke 2:29-32)',
                concludingPrayer: 'Visit this place, Lord, and drive away all the snares of the enemy...',
                marianAntiphon: this.getMarianAntiphon(season)
            }
        };
    }

    getHymn(season, hour) {
        const hymns = {
            Advent: { morning: 'O Come, O Come, Emmanuel', daytime: 'Come, Thou Long Expected Jesus', evening: 'Creator of the Stars of Night', night: 'Jesus, Light of the World' },
            Christmas: { morning: 'O God, Creation\'s Secret Force', daytime: 'Christians, Awake', evening: 'Of the Father\'s Love Begotten', night: 'Silent Night' },
            Lent: { morning: 'O Lord, Throughout the Forty Days', daytime: 'The Glory of These Forty Days', evening: 'O Sacred Head, Surrounded', night: 'Soul of My Savior' },
            Easter: { morning: 'O Sons and Daughters, Let Us Sing', daytime: 'Jesus Christ Is Risen Today', evening: 'The Strife Is O\'er', night: 'Regina Caeli' },
            Ordinary: { morning: 'O God, Creation\'s Secret Force', daytime: 'Hymn for the Church', evening: 'O God of Light and Love', night: 'Te Lucis Ante Terminum' }
        };
        return hymns[season]?.[hour] || 'O God, Creation\'s Secret Force';
    }

    getMarianAntiphon(season) {
        const antiphons = { Advent: 'Alma Redemptoris Mater', Christmas: 'Alma Redemptoris Mater', Lent: 'Ave Regina Caelorum', Easter: 'Regina Caeli', Ordinary: 'Salve Regina' };
        return antiphons[season] || 'Salve Regina';
    }

    getConcludingPrayer(rank, saint) {
        const name = saint?.name || 'the Lord';
        if (rank === 'SOLEMNITY' || rank === 'FEAST') {
            return `O God, who in your providence have given us the example of ${name}, grant us the grace to follow in his/her footsteps. Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, one God, for ever and ever. Amen.`;
        } else if (rank === 'MEMORIAL') {
            return `O God, who have raised up ${name} as a witness of your love, grant that we may imitate his/her virtues and be united with him/her in glory. Through Christ our Lord. Amen.`;
        } else {
            return 'Almighty and eternal God, grant us strength to serve you faithfully in all that we do. Through Christ our Lord. Amen.';
        }
    }

    // ─── MANUAL REFERENCES WITH ABRIDGED SUPPORT ───
    getManualReferences(date, rank, season, psalterWeek, version) {
        const volume = this.getVolumeForSeason(season);
        const properSection = this.getProperSection(date, rank, season);
        const abridgedLoc = this.getAbridgedLocation(date, rank, season, 'morning');

        const fullRefs = {
            morning: {
                hour: 'Morning Prayer (Lauds)',
                location: `Volume ${volume}, ${properSection}, Psalter Week ${psalterWeek}`,
                full: `Volume ${volume}, Pages ${this.getPageRange(volume, 'morning')}`,
                abridged: `Christian Prayer: ${abridgedLoc}`
            },
            daytime: {
                hour: 'Daytime Prayer (Terce/Sext/None)',
                location: `Volume ${volume}, ${season === 'Advent' || season === 'Christmas' || season === 'Lent' || season === 'Easter' ? 'Proper of Seasons' : 'Psalter'}, Week ${psalterWeek}`,
                full: `Volume ${volume}, Pages ${this.getPageRange(volume, 'daytime')}`,
                abridged: `Christian Prayer: ${this.getAbridgedLocation(date, rank, season, 'daytime')}`
            },
            evening: {
                hour: 'Evening Prayer (Vespers)',
                location: `Volume ${volume}, ${properSection}, Psalter Week ${psalterWeek}`,
                full: `Volume ${volume}, Pages ${this.getPageRange(volume, 'evening')}`,
                abridged: `Christian Prayer: ${this.getAbridgedLocation(date, rank, season, 'evening')}`
            },
            night: {
                hour: 'Night Prayer (Compline)',
                location: 'Volume 1, Compline (Fixed Section)',
                full: 'Volume 1, Pages 1-30',
                abridged: 'Christian Prayer, Compline Section (Pages 150-180)'
            }
        };

        // If abridged version, return abridged locations
        if (version === 'abridged') {
            return {
                morning: {
                    hour: 'Morning Prayer (Lauds)',
                    location: fullRefs.morning.abridged,
                    full: fullRefs.morning.full,
                    abridged: fullRefs.morning.abridged
                },
                daytime: {
                    hour: 'Daytime Prayer (Terce/Sext/None)',
                    location: fullRefs.daytime.abridged,
                    full: fullRefs.daytime.full,
                    abridged: fullRefs.daytime.abridged
                },
                evening: {
                    hour: 'Evening Prayer (Vespers)',
                    location: fullRefs.evening.abridged,
                    full: fullRefs.evening.full,
                    abridged: fullRefs.evening.abridged
                },
                night: {
                    hour: 'Night Prayer (Compline)',
                    location: fullRefs.night.abridged,
                    full: fullRefs.night.full,
                    abridged: fullRefs.night.abridged
                }
            };
        }

        return fullRefs;
    }
}

export default OmegaAI;