function CheckSNT (a) {
    var ok = true
    if (a < 2)  {
        console.log("Khong Phai SNT")
    } else { for(var i = 2; i < a-1; i++)
                {
                    if (a % i == 0 ) {
                    ok = false;
                    break;
                } else 
                {
                    oke = true
                }
            }
        }
        if (ok == false) {
            console.log(a,"khong phai la so nguyen to")
        } else { console.log(a,"la so nguyen to")}
}
CheckSNT(9);