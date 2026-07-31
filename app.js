// 🚀 Main Application Controller
import OmegaAI from './omegaAI.js';

class OmegaBreviaryApp {
    constructor() {
        this.ai = new OmegaAI();
        this.currentDate = new Date();
        this.currentHour = 'morning';
        this.init();
    }

    init() {
        this.updateDate();
        this.setupNavigation();
        this.setupCalendarControls();
        this.loadPrayerData();
    }

    updateDate() {
        const dateDisplay = document.getElementById('currentDate');
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateDisplay.textContent = this.currentDate.toLocaleDateString('en-US', options);
    }

    loadPrayerData() {
        console.log('🧠 OMEGA AI is analyzing...');
        
        const analysis = this.ai.analyzeDay(this.currentDate);
        
        // Update Saint Info
        this.updateSaintInfo(analysis.saint, analysis.liturgicalRank);
        
        // Update Ribbon Positions
        this.updateRibbonPositions(analysis.ribbonPositions);
        
        // Update Prayers
        this.updatePrayers(analysis.prayers);
        
        // Update Manual References
        this.updateManualReferences(analysis.manualReferences);
        
        // Update UI
        this.updateRankBadge(analysis.liturgicalRank);
    }

    updateSaintInfo(saint, rank) {
        document.getElementById('saintName').textContent = saint.name;
        document.getElementById('saintBio').textContent = saint.bio;
        document.getElementById('saintFeast').textContent = `🎉 ${saint.feast || 'Feast Day'}`;
        document.getElementById('saintRank').textContent = `📜 ${rank}`;
    }

    updateRibbonPositions(positions) {
        const ribbonMap = {
            morning: 'ribbon1',
            daytime: 'ribbon2',
            evening: 'ribbon3',
            night: 'ribbon4'
        };

        const locationMap = {
            morning: positions.morning.description,
            daytime: positions.daytime.description,
            evening: positions.evening.description,
            night: positions.night.description
        };

        for (const [hour, elementId] of Object.entries(ribbonMap)) {
            const element = document.getElementById(elementId);
            if (element) {
                const locationSpan = element.querySelector('.ribbon-location');
                if (locationSpan) {
                    locationSpan.textContent = locationMap[hour] || 'Not specified';
                }
            }
        }
    }

    updatePrayers(prayers) {
        const content = document.getElementById('prayerContent');
        
        // Get the prayers for the current hour
        const hourMap = {
            'morning': prayers.morning,
            'daytime': prayers.daytime,
            'evening': prayers.evening,
            'night': prayers.night
        };

        const prayer = hourMap[this.currentHour];
        
        if (!prayer) {
            content.innerHTML = '<div class="loading">🧠 OMEGA AI is processing...</div>';
            return;
        }

        let html = `<h3>${prayer.title}</h3>`;

        // Opening
        if (prayer.opening) {
            html += `<div class="prayer-text">📖 ${prayer.opening}</div>`;
        }

        // Hymn
        if (prayer.hymn) {
            html += `<div class="prayer-text">🎵 Hymn: ${prayer.hymn}</div>`;
        }

        // Psalmody
        if (prayer.psalmody) {
            const psalms = Array.isArray(prayer.psalmody) ? prayer.psalmody : [prayer.psalmody];
            html += `<div class="antiphon">📜 Psalms:</div>`;
            psalms.forEach(psalm => {
                html += `<div class="psalm">${psalm}</div>`;
            });
        }

        // Canticle
        if (prayer.canticle) {
            html += `<div class="antiphon">📜 Canticle:</div>`;
            html += `<div class="psalm">${prayer.canticle}</div>`;
        }

        // Reading
        if (prayer.reading) {
            html += `<div class="antiphon">📖 Reading:</div>`;
            html += `<div class="reading">${prayer.reading}</div>`;
        }

        // Responsory
        if (prayer.responsory) {
            html += `<div class="prayer-text">✝️ ${prayer.responsory}</div>`;
        }

        // Gospel Canticle
        if (prayer.gospelCanticle) {
            html += `<div class="antiphon">🎵 Gospel Canticle:</div>`;
            html += `<div class="psalm">${prayer.gospelCanticle}</div>`;
        }

        // Intercessions
        if (prayer.intercessions) {
            html += `<div class="antiphon">🙏 Intercessions:</div>`;
            if (Array.isArray(prayer.intercessions)) {
                prayer.intercessions.forEach(inter => {
                    html += `<div class="prayer-text">• ${inter}</div>`;
                });
            } else {
                html += `<div class="prayer-text">${prayer.intercessions}</div>`;
            }
        }

        // Our Father
        if (prayer.ourFather) {
            html += `<div class="prayer-text">🙏 ${prayer.ourFather}</div>`;
        }

        // Concluding Prayer
        if (prayer.concludingPrayer) {
            html += `<div class="antiphon">📖 Concluding Prayer:</div>`;
            html += `<div class="reading">${prayer.concludingPrayer}</div>`;
        }

        // Examination (for Night Prayer)
        if (prayer.examination) {
            html += `<div class="antiphon">📖 ${prayer.examination}</div>`;
        }

        // Marian Antiphon
        if (prayer.marianAntiphon) {
            html += `<div class="prayer-text">🌹 Marian Antiphon: ${prayer.marianAntiphon}</div>`;
        }

        content.innerHTML = html;
    }

    updateManualReferences(refs) {
        const container = document.getElementById('refContent');
        
        const hourMap = {
            'morning': refs.morning,
            'daytime': refs.daytime,
            'evening': refs.evening,
            'night': refs.night
        };

        const ref = hourMap[this.currentHour];
        
        if (!ref) {
            container.innerHTML = '<div class="loading">No references available</div>';
            return;
        }

        container.innerHTML = `
            <div class="ref-item">
                <span class="hour">${ref.hour}</span>
                <span class="location">📖 ${ref.location}</span>
                <span class="location">📄 Page: ${ref.page}</span>
            </div>
        `;
    }

    updateRankBadge(rank) {
        const badge = document.querySelector('.rank-badge');
        const rankMap = {
            'SOLEMNITY': { text: '🎉 SOLEMNITY', class: 'solemnity' },
            'FEAST': { text: '🌟 FEAST', class: 'feast' },
            'MEMORIAL': { text: '🕊️ MEMORIAL', class: 'memorial' },
            'FERIA (FRIDAY)': { text: '📅 FRIDAY - Penance', class: 'ferial' },
            'FERIA (WEEKDAY)': { text: '📅 WEEKDAY', class: 'ferial' }
        };

        const info = rankMap[rank] || { text: '📅 ORDINARY TIME', class: 'ferial' };
        badge.textContent = info.text;
        badge.className = `rank-badge ${info.class}`;
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                navButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update current hour
                this.currentHour = btn.dataset.hour;
                
                // Reload prayers for the selected hour
                this.loadPrayerData();
            });
        });
    }

    setupCalendarControls() {
        document.getElementById('prevDay').addEventListener('click', () => {
            this.currentDate.setDate(this.currentDate.getDate() - 1);
            this.updateDate();
            this.loadPrayerData();
        });

        document.getElementById('nextDay').addEventListener('click', () => {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            this.updateDate();
            this.loadPrayerData();
        });
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new OmegaBreviaryApp();
    window.app = app; // For debugging
});
