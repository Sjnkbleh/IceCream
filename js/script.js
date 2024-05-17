let current = 1,
    interval;

const changeSlides = () => {                                //change slides
    const slideList = $(".slide");
    const slides = Array.from(slideList);
    console.log(current);
    if (current > slides.length) {
        current = 1;
    } else if (current === 0) {
        current = slides.length;
    }

    slides.forEach(slide => {
        if (slide.classList[1].split("-")[1] * 1 === current) {
            slide.style.cssText = "visibility: visible; opacity: 1";
        } else {
            slide.style.cssText = "visibility: hidden; opacity: 0";
        }
    });
};

const arrowVisibility = () => {                             //visibility of left and right arrows
    const arrows = $(".control");
    Array.from(arrows).forEach(arrow => {
        if (arrow.mouseover) {
            arrow.classList.remove("arrows-visibility");    //display arrow when being hovered
        } else {
            arrow.classList.add("arrows-visibility");       //hide arrow when not being hovered
        }
    });
};

const Interval = () => {                                    //time between a slide change
    interval = setInterval(() => {
        current++;
        changeSlides();
    }, 7000);
};

function hideArrow() {                                      //hide the arrows when initialized
    const arrows = $(".control");
    Array.from(arrows).forEach(arrow => {
        arrow.classList.add("arrows-visibility");
    });
};

function resetInterval() {                                  //reset the interval 
    clearInterval(interval); 
};

function toggleFields() {                                   //toggle show and hide the fieldsets when clicking on the assigned elements
    $("#delivery").click(function(){
        $("#dAdd").toggle().show();
    }); 
    $("#pickup").click(function(){
        $("#dAdd").toggle().hide();
    });

    $("#on-pickup").click(function(){
        $("#credit").toggle().hide();
    });
    $("#online").click(function(){
        $("#credit").toggle().show();
    });
};

function checkDeliveryAddress () {                          //check whether delivery address is fully filled when the "same as delivery address" checkbox is ticked
    var delivery = $("#delivery").prop("checked");
    var streetAdd = $("#street-address").val();
    var suburbTown = $("#suburb-town").val();
    var state = $("#state").val();
    var postcode = $("#postcode").val();
    var sameAdd = $("#sameAdd").prop("checked");
 

    if ((delivery)&&(sameAdd)) {
        if (((streetAdd == "")&&(suburbTown == "")&&(state == null)&&(postcode == ""))) {
            $("#deliveryAddErrMsg").html("Please enter your delivery address first");
        } else {
            $("#bAdd").val(streetAdd + ", " + suburbTown + ", " + state + ", " + postcode);
        }
    }
}

function validateRegForm() {                                //check validation of the registration form
	var uname = $("#uname").val();
	var pwd = $("#pwd").val();
	var genm = $("#genM").prop("checked");
	var genf = $("#genF").prop("checked");

    
	result = true;						                    // assumes no errors 
	var patternUname = /^[a-zA-Z-_]+$/;		                // regular expression for username 

	if (uname == "") {							            //check whether username is empty
		$("#unameErrMsg").html("Please fill in this field.");
        result = false;
	} else if (! uname.match (patternUname)) {              //check whether username matches the regular expression
        $("#unameErrMsg").html("User name only contains letters, hyphens and underscores.");
        result = false;
    }
    if (pwd == "") {							            //check whether password is empty
        $("#pwdErrMsg").html("Please fill in this field.");
        result = false;
    } else if (pwd.length < 9) {                            //check whether password matches the required length
        $("#pwdErrMsg").html("Password must be at least 9 characters.");
        result = false;
    }
	if ((!genm)&&(!genf)) {				                    //check whether gender is selected
		$("#genErrMsg").html("Please select your gender.");
        result = false;
	}	

	return result;
};

function validateOdForm() {                                 //check validation of the order form
    var gelato = $("#gelato-req").prop("checked");
    var creamCone = $("#cream-cone-req").prop("checked");
    var sorbet = $("#sorbet-req").prop("checked");
    var flavor = $("#product-req").val();
    var sizeS = $("#S").prop("checked");
    var sizeM = $("#M").prop("checked");
    var sizeL = $("#L").prop("checked");
    var delivery = $("#delivery").prop("checked");
    var pickup = $("#pickup").prop("checked");
    var streetAdd = $("#street-address").val();
    var suburbTown = $("#suburb-town").val();
    var state = $("#state").val();
    var postcode = $("#postcode").val();
    var billingAdd = $("#bAdd").val();
    var sameAdd = $("#sameAdd").prop("checked");
    var phone = $("#telephone").val();
    var email = $("#email").val();
    var onPickup = $("#on-pickup").prop("checked");
    var online = $("#online").prop("checked");
    var visa = $("#visa").prop("checked");
    var MasterCard = $("#MasterCard").prop("checked");
    var AmericanExpress = $("#AmericanExpress").prop("checked");
    var ccNum = $("#cc-num").val();
    var expDate = $("#exp-date").val();
    var cvv = $("#CVV").val();

	result = true;
    var patternPostcode = /^\d{4}$/;                         // regular expression for postcode
    var patternTele = /^\d{10}$/;                            // regular expression for telephone
    var patternCCnum1 = /^\d{16}$/;                          // regular expression for Visa and MasterCard number 
    var patternCCnum2 = /^\d{15}$/;                          // regular expression for American Express number 
    var patternExpDate= /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;   // regular expression for expiration date
    var patternCVV= /^\d{3}$/;                               // regular expression for CVV 

    if ((!gelato)&&(!creamCone)&&(!sorbet)) {               //check whether an ice cream type is selected
        $("#typeErrMsg").html("Please select an option.");
        result = false;
    }
    if ((!sizeS)&&(!sizeM)&&(!sizeL)) {                     //check whether an ice cream size is selected
        $("#sizeErrMsg").html("Please select an option.");
        result = false;
    }
    if ((flavor == "")) {                                   //check whether flavor is selected
        $("#flavorErrMsg").html("Please select an option.");
        result = false;
    }
    if ((!delivery)&&(!pickup)) {                           //check whether receiving method is selected
        $("#deliveryErrMsg").html("Please select a delivery method.");
        result = false;
    }
    if ((delivery)) {                                       //if delivery is the receiving method
        if (streetAdd == "") {			                    //check whether street address is empty		
		    $("#streetAddErrMsg").html("Please fill in this field.");
            result = false;
	    }
        if (suburbTown == "") {								//check whether suburb/town is empty
		    $("#suburb-townErrMsg").html("Please fill in this field.");
            result = false;
	    }
        if (state == "") {								    //check whether state is selected
		    $("#statetownErrMsg").html("Please select and option.");
            result = false;
	    }
        if (postcode == "") {								//check whether postcode is empty
		    $("#postcodeErrMsg").html("Please fill in this field.");
            result = false;
	    } else if (! postcode.match (patternPostcode)) {    //check whether postcode matches the regular expression
            $("#postcodeErrMsg").html("Postcode must have exactly four digits.");
            result = false;
        }
    }
    if ((delivery)) {                                       //if delivery is the receiving method
        if (((streetAdd == "")&&(suburbTown == "")&&(state == "")&&(postcode == ""))&&(billingAdd == "")&&(!sameAdd)) {				//check whether the billing address is empty while the "same as delivery address" checkbox is not selected				
            $("#billingAddErrMsg").html("Please fill in this field.");
            result = false;
        }
    }
    if (phone == "") {								        //check whether phone number is empty
		$("#phoneErrMsg").html("Please fill in this field.");
        result = false;
	} else if (! phone.match (patternTele)) {               //check whether phone number matches the regular expression
        $("#phoneErrMsg").html("Phone number must have exactly ten digits.");
        result = false;
    }
    if (email == "") {					                    //check whether email is empty			
		$("#emailErrMsg").html("Please fill in this field.");
        result = false;
	}
    if ((!onPickup)&&(!online)) {                           //check whether payment method is selected
        $("#paymentErrMsg").html("Please select an option.");
        result = false;
    }
    if ((online)) {                                         //if online is the payment method
        if ((!visa)&&(!MasterCard)&&(!AmericanExpress)) {   //check whether credit card type is selected
            $("#ccTypeErrMsg").html("Please select an option.");
            result = false;
        } else if ((visa) || (MasterCard)) {                 //if Visa or MasterCard is the selected credit card type
            if ((ccNum != "")&&(! ccNum.match (patternCCnum1))) {     //check whether Visa or MasterCard number matches the regular expression
                $("#ccNumErrMsg").html("Visa or MasterCard number must have exactly sixteen digits.");
                result = false;
            }
        } else {                                            //if American Express is the selected credit card type
            if ((ccNum != "")&&(! ccNum.match (patternCCnum2))) {     //check whether American Express number matches the regular expression
                $("#ccNumErrMsg").html("American Express number must have exactly fifteen digits.");
                result = false;
            }
        }
        if (ccNum == "") {								//check whether the credit card number is empty
            $("#ccNumErrMsg").html("Please fill in this field.");
            result = false;
        }
        if (expDate == "") {								//check whether expiration date is empty
            $("#expDateErrMsg").html("Please fill in this field.");
            result = false;
        } else if (! expDate.match (patternExpDate)) {      //check whether expiration date matches the regular expression
            $("#expDateErrMsg").html("Wrong expiration date format.");
            result = false;
        }
        if (cvv == "") {								    //check whether CVV is empty
            $("#cvvErrMsg").html("Please fill in this field.");
            result = false;
        } else if (! cvv.match (patternCVV)) {              //check whether CVV matches the regular expression
            $("#cvvErrMsg").html("CVV must have exactly three digits.")
            result = false;
        }
    }

	return result;
}; 

function init() {                                          //make the above functions work when initialized
    hideArrow();
    changeSlides();
    Interval();
    $(".control").mouseover(arrowVisibility);
    $(".left-arrow").click(() => {
        current--;
        changeSlides();
        resetInterval();
        Interval();
    });
    $(".right-arrow").click(() => {
        current++;
        changeSlides();
        resetInterval();
        Interval();
    });

    $("#dAdd").hide();
    $("#credit").hide();

    toggleFields();

    $("#testId").click(checkDeliveryAddress);

    $("#regform").submit(validateRegForm);
    $("#odform").submit(validateOdForm);
};

$(document).ready(init);                                   