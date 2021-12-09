function mobile(name) {
            this.battery = 100;
            this.name = name;
            this.message = [];
            this.messTmp;
            this.sented = [];
            this.mode = 1;

            this.isOn = function () {
                if (this.battery > 0) {
                    this.battery--;
                }
                else {
                    this.mode = 0;
                }

                if (this.mode === 1) {
                    return true;
                }

                return false;
            }

            this.setMode = function (i) {
                this.mode = i;
            }

            this.charge = function (time) {
                if (this.battery > 0) {
                    this.battery--;
                }
                else {
                    this.mode = 0;
                }

                if (this.mode === 1) {
                    this.battery = this.battery + time;
                }
            }

            this.typingMessage = function (mess) {
                if (this.battery > 0) {
                    this.battery--;
                }
                else {
                    this.mode = 0;
                }

                if (this.mode === 1) {
                    this.messTmp = mess;
                }
            }

            this.addMess = function (phone, content) {
                if (this.battery > 0) {
                    this.battery--;
                }
                else {
                    this.mode = 0;
                }

                if (this.mode === 1) {
                    let zip = [phone, content]
                    this.message.push(zip);
                    console.log("New message from ", phone);
                }
            }

            this.sentTo = function (phoneTo, content) {
                if (this.battery > 0) {
                    this.battery--;
                }
                else {
                    this.mode = 0;
                }

                if (this.mode === 1) {
                    phoneTo.addMess(this.name, content);
                    this.sented.push([phoneTo.name, content]);
                    console.log("Sented");
                }
            }

            this.showAllMessage = function () {
                if (this.mode === 1) {
                    if (this.battery > 0) {
                        this.battery--;
                    }
                    else {
                        this.mode = 0;
                    }
                    return this.message;
                }
            }

            this.showAllSented = function () {
                if (this.mode === 1) {
                    // Show all sented message
                    if (this.battery > 0) {
                        this.sented--;
                    }
                    else {
                        this.mode = 0;
                    }

                    return this.sented;
                }
            }
        }

        let nokia = new mobile("nokia");
        let iphone = new mobile("iphone");

        nokia.sentTo(iphone, "Nokia is the best");

        document.write(iphone.showAllMessage());
