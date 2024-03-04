class Note {
    constructor() {
        this.nameList = [];
        this.name = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti'];
        this.pitch = [1, 2, 3, 4, 5, 6, 7];
    }

    show(name, pitch) {
        console.log(`Note: ${name}, pitch: ${pitch}`);
    }
}

class Instrument extends Note {
    constructor(brand, model, color) {
        super();
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.record = false;
        this.play = false;
        this.stop = false;
        let self = this;

        document.querySelector('#do').addEventListener('click', function () {
            var audio = new Audio('./assets/piano/do.mp3');
            audio.play();
            if (self.record == true) {
                self.addNote('do', 1);
                self.recordedNotes();
            }
            return self.nameList;
        });
        document.querySelector('#re').addEventListener('click', function () {
            var audio = new Audio('./assets/piano/re.mp3');
            audio.play();
            if (self.record == true) {
                self.addNote('re', 1);
                self.recordedNotes();
            }
            return self.nameList;
        });
        document.querySelector('#mi').addEventListener('click', function () {
            var audio = new Audio('./assets/piano/mi.mp3');
            audio.play();
            if (self.record == true) {
                self.addNote('mi', 1);
                self.recordedNotes();
            }
            return self.nameList;
        });
        document.querySelector('#fa').addEventListener('click', function () {
            var audio = new Audio('./assets/piano/fa.mp3');
            audio.play();
            if (self.record == true) {
                self.addNote('fa', 1);
                self.recordedNotes();
            }
            return self.nameList;
        });
        document.querySelector('#sol').addEventListener('click', function () {
            var audio = new Audio('./assets/piano/sol.mp3');
            audio.play();
            if (self.record == true) {
                self.addNote('sol', 1);
                self.recordedNotes();
            }
            return self.nameList;
        });
        document.querySelector('#la').addEventListener('click', function () {
            var audio = new Audio('./assets/piano/la.mp3');
            audio.play();
            if (self.record == true) {
                self.addNote('la', 1);
                self.recordedNotes();
            }
            return self.nameList;
        });
        document.querySelector('#ti').addEventListener('click', function () {
            var audio = new Audio('./assets/piano/ti.mp3');
            audio.play();
            if (self.record == true) {
                self.addNote('ti', 1);
                self.recordedNotes();
            }
            return self.nameList;
        });
        document.querySelector('#play').addEventListener('click', function () {
            self.stop = false;
            self.record = false;
            this.style.backgroundColor = 'gray';

            if (self.nameList.length === 0) {
                alert('Please record a note first.');
            }

            self.removeStyle();

            for (let i = 0; i < self.nameList.length; i++) {
                setTimeout(function () {
                    var audio = new Audio(
                        `./assets/piano/${self.nameList[i][0]}.mp3`
                    );
                    audio.play();
                }, 400 * i);
            }

            return (self.play = true);
        });
        document.querySelector('#stop').addEventListener('click', function () {
            self.play = false;
            self.record = false;
            self.removeStyle();
            this.style.backgroundColor = 'gray';

            return (self.stop = true);
        });
        document
            .querySelector('#record')
            .addEventListener('click', function () {
                self.play = false;
                self.stop = false;
                self.removeStyle();
                this.style.backgroundColor = 'gray';

                return (self.record = true);
            });
    }

    addNote(note, pitch) {
        this.nameList[this.nameList.length] = [`${note}`, `${pitch}`];
        return this.nameList;
    }

    removeLastNote() {
        this.nameList[this.nameList.length] = '';
        return this.nameList;
    }

    changeNote(index, note, pitch) {
        this.nameList[index] = [`${note}`, `${pitch}`];
        return this.nameList;
    }

    // Fisher Yates Shuffle: https://bost.ocks.org/mike/shuffle/
    shuffleRecord() {
        var m = this.nameList.length,
            t,
            i;

        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.nameList[m];
            this.nameList[m] = this.nameList[i];
            this.nameList[i] = t;
        }
        return this.nameList;
    }

    autoCompose(num) {
        this.nameList = [];
        for (let i = 0; i < num; i++) {
            this.nameList[i] = [
                `${this.name[Math.floor(Math.random() * this.name.length)]}`,
                1,
            ];
        }
        return this.nameList;
    }

    recordedNotes() {
        console.log(this.nameList);
    }

    removeStyle() {
        const play = document.querySelector('#play');
        const stop = document.querySelector('#stop');
        const record = document.querySelector('#record');

        const elementArr = [play, stop, record];

        for (let i = 0; i < elementArr.length; i++) {
            elementArr[i].style.background = 'none';
        }
    }
}

let piano = new Instrument('yamaha', 'x5s', 'blue');
