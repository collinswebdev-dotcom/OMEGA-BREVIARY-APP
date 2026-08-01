// 🚀 MAIN APPLICATION - With Abridged Version Support
import OmegaAI from './omegaAI.js';

class OmegaBreviaryApp {
    constructor() {
        this.ai = new OmegaAI();
        this.currentDate = new Date();
        this.currentHour = 'morning';
        this.currentVersion = 'full';
        this.init();
    }

    init() {
        console.log('🚀 OMEGA BREVIARY starting...');
        this.updateDateDisplay();
        this.setupEventListeners();
        this.loadPrayerData();
        this.updateVersionDisplay();
    }

    setupEventListeners() {
        // Navigation buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                navButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentHour = btn.dataset.hour;
                this.loadPrayerData();
            });
        });

        // Calendar navigation
        document.getElementById('prevDay')?.addEventListener('click', () => {
            this.currentDate.setDate(this.currentDate.getDate() - 1);
            this.updateDateDisplay();
            this.loadPrayerData();
        });

        document.getElementById('nextDay')?.addEventListener('click', () => {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            this.updateDateDisplay();
            this.loadPrayerData();
        });

        // Version toggle buttons
        const versionBtns = document.querySelectorAll('.version-btn');
        versionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                versionBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentVersion = btn.dataset.version;
                this.updateVersionDisplay();
                this.loadPrayerData();
            });
        });
    }

    updateDateDisplay() {
        const dateDisplay = document.getElementById('currentDate');
        const dayDisplay = document.getElementById('currentDayDisplay');
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = this.currentDate.toLocaleDateString('en-US', options);
        if (dateDisplay) dateDisplay.textContent = dateStr;
        if (dayDisplay) dayDisplay.textContent = dateStr;
    }

    updateVersionDisplay() {
        const display = document.getElementById('versionDisplay');
        if (display) {
            display.textContent = this.currentVersion === 'full' ? 'Full Breviary' : 'Abridged (Christian Prayer)';
        }
    }

    loadPrayerData() {
        console.log(`🧠 OMEGA AI analyzing (${this.currentVersion})...`);
        
        try {
            const analysis = this.ai.analyzeDay(this.currentDate, this.currentVersion);
            
            this.updateSaintInfo(analysis.saint, analysis.liturgicalRank);
            this.updateRibbonPositions(analysis.ribbonPositions);
            this.updatePrayers(analysis.prayers);
            this.updateManualReferences(analysis.manualReferences);
            this.updateRankBadge(analysis.liturgicalRank);
            
            console.log('✅ Analysis complete:', analysis.liturgicalRank);
        } catch (error) {
            console.error('❌ Error:', error);
            document.getElementById('prayerContent').innerHTML = 
                '<div class="loading">⚠️ Error loading data. Please refresh.</div>';
        }
    }

    updateSaintInfo(saint, rank) {
        const nameEl = document.getElementById('saintName');
        const bioEl = document.getElementById('saintBio');
        const feastEl = document.getElementById('saintFeast');
        const rankEl = document.getElementById('saintRank');

        if (nameEl) nameEl.textContent = saint?.name || 'No Saint Today';
        if (bioEl) bioEl.textContent = saint?.bio || 'No information available.';
        if (feastEl) feastEl.textContent = `🎉 ${saint?.feast || 'Feast Day'}`;
        if (rankEl) rankEl.textContent = `📜 ${rank}`;
    }

    updateRibbonPositions(positions) {
        const ribbonMap = {
            morning: 'ribbon1',
            daytime: 'ribbon2',
            evening: 'ribbon3',
            night: 'ribbon4'
        };

        for (const [hour, elementId] of Object.entries(ribbonMap)) {
            const element = document.getElementById(elementId);
            if (element) {
                const locationSpan = element.querySelector('.ribbon-location');
                if (locationSpan) {
                    const pos = positions?.[hour];
                    if (pos) {
                        // Show abridged location if available
                        const isAbridged = this.currentVersion === 'abridged';
                        locationSpan.textContent = pos.description || 'Not specified';
                        locationSpan.className = `ribbon-location ${isAbridged ? 'abridged' : ''}`;
                    }
                }
            }
        }
    }

    updatePrayers(prayers) {
        const content = document.getElementById('prayerContent');
        const hourMap = {
            'morning': prayers?.morning,
            'daytime': prayers?.daytime,
            'evening': prayers?.evening,
            'night': prayers?.night
        };

        const prayer = hourMap[this.currentHour];
        if (!prayer) {
            content.innerHTML = '<div class="loading">🧠 OMEGA AI is processing...</div>';
            return;
        }

        let html = `<h3>${prayer.title || 'Prayer'}</h3>`;

        if (prayer.opening) html += `<div class="prayer-text">📖 ${prayer.opening}</div>`;
        if (prayer.hymn) html += `<div class="prayer-text">🎵 Hymn: ${prayer.hymn}</div>`;
        
        if (prayer.psalmody) {
            const psalms = Array.isArray(prayer.psalmody) ? prayer.psalmody : [prayer.psalmody];
            html += `<div class="antiphon">📜 Psalms:</div>`;
            psalms.forEach(psalm => {
                html += `<div class="psalm">${psalm}</div>`;
            });
        }

        if (prayer.canticle) {
            html += `<div class="antiphon">📜 Canticle:</div>`;
            html += `<div class="psalm">${prayer.canticle}</div>`;
        }

        if (prayer.reading) {
            html += `<div class="antiphon">📖 Reading:</div>`;
            html += `<div class="reading">${prayer.reading}</div>`;
        }

        if (prayer.responsory) html += `<div class="prayer-text">✝️ ${prayer.responsory}</div>`;
        
        if (prayer.gospelCanticle) {
            html += `<div class="antiphon">🎵 Gospel Canticle:</div>`;
            html += `<div class="psalm">${prayer.gospelCanticle}</div>`;
        }

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

        if (prayer.ourFather) html += `<div class="prayer-text">🙏 ${prayer.ourFather}</div>`;
        
        if (prayer.concludingPrayer) {
            html += `<div class="antiphon">📖 Concluding Prayer:</div>`;
            html += `<div class="reading">${prayer.concludingPrayer}</div>`;
        }

        if (prayer.examination) html += `<div class="antiphon">📖 ${prayer.examination}</div>`;
        if (prayer.marianAntiphon) html += `<div class="prayer-text">🌹 Marian Antiphon: ${prayer.marianAntiphon}</div>`;

        content.innerHTML = html;
    }

    updateManualReferences(refs) {
        const container = document.getElementById('refContent');
        const hourMap = {
            'morning': refs?.morning,
            'daytime': refs?.daytime,
            'evening': refs?.evening,
            'night': refs?.night
        };

        const ref = hourMap[this.currentHour];
        if (!ref) {
            container.innerHTML = '<div class="loading">No references available</div>';
            return;
        }

        const isAbridged = this.currentVersion === 'abridged';
        
        let html = `
            <div class="ref-item">
                <span class="hour">${ref.hour || 'Prayer'}</span>
                <span class="location">📖 ${ref.location || 'Not specified'}</span>
        `;

        // Show both versions if available
        if (ref.full && ref.abridged) {
            html += `
                <div style="margin-top: 0.5rem;">
                    <span class="version-tag full">Full Breviary</span>
                    <span class="location" style="display:block; margin-top: 0.2rem;">📚 ${ref.full}</span>
                    <span class="version-tag abridged" style="display:inline-block; margin-top:0.3rem;">Abridged</span>
                    <span class="location" style="display:block; margin-top: 0.2rem;">📖 ${ref.abridged}</span>
                </div>
            `;
        } else {
            html += `<span class="location">📄 ${ref.page || 'Not specified'}</span>`;
        }

        html += `</div>`;
        container.innerHTML = html;
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
        if (badge) {
            badge.textContent = info.text;
            badge.className = `rank-badge ${info.class}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 DOM loaded, starting app...');
    const app = new OmegaBreviaryApp();
    window.app = app;
});