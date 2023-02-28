 //18. input = 345 ouput = 55 44 33

        let number = 345;
        let  store = 0;
        while (number > 0) {
            store = number % 10;
            number = parseInt(number / 10);
            console.log(11 * store);
        }