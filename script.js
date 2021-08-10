// Fist problem 

    function seerToMon(seer) {

        // using Validation
        if( seer < 0 ){
            return " Please input a Valid Number :( ";
        }

        const mon = seer / 40 ;
        return mon;

    }

     const convertToMon = seerToMon( 30 );
    //  console.log(seerToMon(30));


// Second Problem 

    function totalSales( shirtQuentity, pantQuentity, shoesQuentity ){
        
        // Using Validation 

        if( ( shirtQuentity < 0 ) || ( pantQuentity < 0 ) || ( shoesQuentity < 0 ) ){
            return " Please gives Valid Number :( " ;
        }

        // Product Prices
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoesPrice = 500;

        // Product value and price Calculation        
        const totalShirtPrice = shirtPrice * shirtQuentity ;
        const totalPantPrice  = pantPrice * pantQuentity;
        const totalShoesPrice = shoesPrice * shoesQuentity;

        // Total Price Addition 
        const totalSellingPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;

        // Return the Total Value
        return totalSellingPrice;  

    }
    const totalSellingAmount = totalSales( 0, 0, 5 );
//    console.log( totalSellingAmount );


// Third Problem

    function deliveryCost( tshirtQuantity ){

        // Using Validation for tshirtQuantity

            if( tshirtQuantity < 0 ){
                return "Please Give a Valid Number :(";
            } 

        // Global Constance value assign
        const fistTransportCharge = 100; 
        const secondTransportCharge = 80; 
        const thirdTransportCharge = 50; 

        // For first 100 T-shirt Transport Charge 
        if( tshirtQuantity <= 100 ){

            const transportCharge = tshirtQuantity * fistTransportCharge;
            return transportCharge;

        }

        // For Second 100 T-shirt Transport Charge 
        else if( tshirtQuantity <= 200 ){

            const transportCharge = 100 * fistTransportCharge;
            const restTshirtQuentity = tshirtQuantity - 100;
            const seconPraceQuentityPrice = restTshirtQuentity * secondTransportCharge;  
            const secTransportCharge = transportCharge + seconPraceQuentityPrice; 
            return secTransportCharge;

        }

        // For Third infinity Numbers of Shirt Charge
        else{

            const transportCharge = 100 * fistTransportCharge;  
            const seconPraceQuentityPrice = 100 * secondTransportCharge; 
            const thirdRestQuentity = tshirtQuantity - 200;
            const totalThirdCharge = thirdRestQuentity * thirdTransportCharge;
            const totalThirdPraceCharge = transportCharge + seconPraceQuentityPrice + totalThirdCharge;
            return totalThirdPraceCharge;

        }

    }

    const totalDelivaryCost = deliveryCost( 5 );
    // console.log( totalDelivaryCost );

// Four Problem

    function perfectFriend( friends ){

         //Using validation
        if (typeof friends != 'object') {
            return 'Please enter a valid value :(';
        }
    
        // Validation for string
        else if (typeof friends == 'string') {
            return 'please enter valid value :(';
        }

        // Loop Define 
        for( const friend of friends){
            if( friend.length == 5 ){
                return friend;
            }
        }
    }

    const friends = [ "Maruf Mobin", "Munna Mahmud", "Meer Shuieb", "Mukit Ahamed", "Masum Mollah", "Rocky", "Md Firoj", "Md Hassan", "Md Sarfaraj" , "Bicky" ];

    const myFriends = perfectFriend( friends );
    // console.log( myFriends );


  