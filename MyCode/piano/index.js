//Piano .js - realstandards
 // first we initiate our variables   

//Keys 
const allKeys = document.querySelectorAll(".keynote")
// const allAudio = document.querySelectorAll("#audio")
//Key Declaration Start.1
const key1 = document.querySelector(".key1") // Selecting the element w query selector 
const key2 = document.querySelector(".key2")
const key3 = document.querySelector(".key3")
const key4 = document.querySelector(".key4")
const key5 = document.querySelector(".key5")
const key6 = document.querySelector(".key6")
const key7 = document.querySelector(".key7")
const key8 = document.querySelector(".key8")
const key9 = document.querySelector(".key9")
const key10 = document.querySelector(".key10")
const key11 = document.querySelector(".key11")
const key12 = document.querySelector(".key12")
const key13 = document.querySelector(".key13")
const key14 = document.querySelector(".key14")
const key15 = document.querySelector(".key15")
const key16 = document.querySelector(".key16")
const key17 = document.querySelector(".key17")
const key18 = document.querySelector(".key18")
const key19 = document.querySelector(".key19")
const key20 = document.querySelector(".key20")
const key21 = document.querySelector(".key21")
const key22 = document.querySelector(".key22")
const key23 = document.querySelector(".key23")
const key24 = document.querySelector(".key24")
const key25 = document.querySelector(".key25")
const key26 = document.querySelector(".key26")
const key27 = document.querySelector(".key27")
const key28 = document.querySelector(".key28")
const key29 = document.querySelector(".key29")
const key30 = document.querySelector(".key30")
const key31 = document.querySelector(".key31")
const key32 = document.querySelector(".key32")
const key33 = document.querySelector(".key33")
const key34 = document.querySelector(".key34")
const key35 = document.querySelector(".key35")
const key36 = document.querySelector(".key36")
const key37 = document.querySelector(".key37")
const key38 = document.querySelector(".key38")
const key39 = document.querySelector(".key39")
const key40 = document.querySelector(".key40")
const key41 = document.querySelector(".key41")
const key42 = document.querySelector(".key42")
const key43 = document.querySelector(".key43")
const key44 = document.querySelector(".key44")
const key45 = document.querySelector(".key45")
const key46 = document.querySelector(".key46")
const key47 = document.querySelector(".key47")
const key48 = document.querySelector(".key48")
const key49 = document.querySelector(".key49")
const key50 = document.querySelector(".key50")
const key51 = document.querySelector(".key51")
const key52 = document.querySelector(".key52")
const key53 = document.querySelector(".key53")
const key54 = document.querySelector(".key54")
const key55 = document.querySelector(".key55")
const key56 = document.querySelector(".key56")
const key57 = document.querySelector(".key57")
const key58 = document.querySelector(".key58")
const key59 = document.querySelector(".key59")
const key60 = document.querySelector(".key60")
const key61 = document.querySelector(".key61")
const key62 = document.querySelector(".key62")
const key63 = document.querySelector(".key63")
const key64 = document.querySelector(".key64")
const key65 = document.querySelector(".key65")
const key66 = document.querySelector(".key66")
const key67 = document.querySelector(".key67")
const key68 = document.querySelector(".key68")
const key69 = document.querySelector(".key69")
const key70 = document.querySelector(".key70")
const key71 = document.querySelector(".key71")
const key72 = document.querySelector(".key72")
const key73 = document.querySelector(".key73")
const key74 = document.querySelector(".key74")
const key75 = document.querySelector(".key75")
const key76 = document.querySelector(".key76")
const key77 = document.querySelector(".key77")
const key78 = document.querySelector(".key78")
const key79 = document.querySelector(".key79")
const key80 = document.querySelector(".key80")
const key81 = document.querySelector(".key81")
const key82 = document.querySelector(".key82")
const key83 = document.querySelector(".key83")
const key84 = document.querySelector(".key84")
const key85 = document.querySelector(".key85")
const key86 = document.querySelector(".key86")
const key87 = document.querySelector(".key87")
const key88 = document.querySelector(".key88")





//audio Declaration start . 
const audio1 = document.querySelector("#sound1");
const audio2 = document.querySelector("#sound2");
const audio3 = document.querySelector("#sound3");
const audio4 = document.querySelector("#sound4");
const audio5 = document.querySelector("#sound5");
const audio6 = document.querySelector("#sound6");
const audio7 = document.querySelector("#sound7");
const audio8 = document.querySelector("#sound8");
const audio9 = document.querySelector("#sound9");
const audio10 = document.querySelector("#sound10");
const audio11 = document.querySelector("#sound11");
const audio12 = document.querySelector("#sound12");
const audio13 = document.querySelector("#sound13");
const audio14 = document.querySelector("#sound14");
const audio15 = document.querySelector("#sound15");
const audio16 = document.querySelector("#sound16");
const audio17 = document.querySelector("#sound17");
const audio18 = document.querySelector("#sound18");
const audio19 = document.querySelector("#sound19");
const audio20 = document.querySelector("#sound20");
const audio21 = document.querySelector("#sound21");
const audio22 = document.querySelector("#sound22");
const audio23 = document.querySelector("#sound23");
const audio24 = document.querySelector("#sound24");
const audio25 = document.querySelector("#sound25");
const audio26 = document.querySelector("#sound26");
const audio27 = document.querySelector("#sound27");
const audio28 = document.querySelector("#sound28");
const audio29 = document.querySelector("#sound29");
const audio30 = document.querySelector("#sound30");
const audio31 = document.querySelector("#sound31");
const audio32 = document.querySelector("#sound32");
const audio33 = document.querySelector("#sound33");
const audio34 = document.querySelector("#sound34");
const audio35 = document.querySelector("#sound35");
const audio36 = document.querySelector("#sound36");
const audio37 = document.querySelector("#sound37");
const audio38 = document.querySelector("#sound38");
const audio39 = document.querySelector("#sound39");
const audio40 = document.querySelector("#sound40");
const audio41 = document.querySelector("#sound41");
const audio42 = document.querySelector("#sound42");
const audio43 = document.querySelector("#sound43");
const audio44 = document.querySelector("#sound44");
const audio45 = document.querySelector("#sound45");
const audio46 = document.querySelector("#sound46");
const audio47 = document.querySelector("#sound47");
const audio48 = document.querySelector("#sound48");
const audio49 = document.querySelector("#sound49");
const audio50 = document.querySelector("#sound50");
const audio51 = document.querySelector("#sound51");
const audio52 = document.querySelector("#sound52");
const audio53 = document.querySelector("#sound53");
const audio54 = document.querySelector("#sound54");
const audio55 = document.querySelector("#sound55");
const audio56 = document.querySelector("#sound56");
const audio57 = document.querySelector("#sound57");
const audio58 = document.querySelector("#sound58");
const audio59 = document.querySelector("#sound59");
const audio60 = document.querySelector("#sound60");
const audio61 = document.querySelector("#sound61");
const audio62 = document.querySelector("#sound62");
const audio63 = document.querySelector("#sound63");
const audio64 = document.querySelector("#sound64");
const audio65 = document.querySelector("#sound65");
const audio66 = document.querySelector("#sound66");
const audio67 = document.querySelector("#sound67");
const audio68 = document.querySelector("#sound68");
const audio69 = document.querySelector("#sound69");
const audio70 = document.querySelector("#sound70");
const audio71 = document.querySelector("#sound71");
const audio72 = document.querySelector("#sound72");
const audio73 = document.querySelector("#sound73");
const audio74 = document.querySelector("#sound74");
const audio75 = document.querySelector("#sound75");
const audio76 = document.querySelector("#sound76");
const audio77 = document.querySelector("#sound77");
const audio78 = document.querySelector("#sound78");
const audio79 = document.querySelector("#sound79");
const audio80 = document.querySelector("#sound80");
const audio81 = document.querySelector("#sound81");
const audio82 = document.querySelector("#sound82");
const audio83 = document.querySelector("#sound83");
const audio84 = document.querySelector("#sound84");
const audio85 = document.querySelector("#sound85");
const audio86 = document.querySelector("#sound86");
const audio87 = document.querySelector("#sound87");
const audio88 = document.querySelector("#sound88");




// Logic checks which key was pressed and also 
// either explicitly if the e.shiftKey or the 
//shift key in the event , is or is not true/ 

// The first 44 checks to see if it is false , 
// The second 44 checks too see if they are true. 


// -----------
console.log(audio1)
function fireSounds(e){
    console.log(e.keyCode)
// First 44 keys  
    if(e.keyCode == 49 && e.shiftKey == false){   // starting at key 1  
key1.classList.add("pressedButton")
audio1.play()
audio1.currentTime = 0; 

console.log(e)

}

if(e.keyCode == 50 && e.shiftKey == false){   // 
    key2.classList.add("pressedButton")
    audio2.play()
    audio2.currentTime = 0;
}


if(e.keyCode == 51 && e.shiftKey == false){   //  
    key3.classList.add("pressedButton")
    audio3.play()
    audio3.currentTime = 0;
}

if(e.keyCode == 52 && e.shiftKey == false){   //  at key 4  
    key4.classList.add("pressedButton")
    audio4.play()
    audio4.currentTime = 0;
}    


if(e.keyCode == 53 && e.shiftKey == false){   //  
    key5.classList.add("pressedButton")
    audio5.play()
    audio5.currentTime = 0;
}

if(e.keyCode == 54 && e.shiftKey == false ){   //  #6  / 6 
    key6.classList.add("pressedButton")
    audio6.play()
    audio6.currentTime = 0;
}


if(e.keyCode == 55 && e.shiftKey == false ){   //  
    key7.classList.add("pressedButton")
    audio7.play()
    audio7.currentTime = 0;
}


if(e.keyCode == 56 && e.shiftKey == false ){   //  #8 / 8 
    key8.classList.add("pressedButton")
    audio8.play()
    audio8.currentTime = 0;
}


if(e.keyCode == 57 && e.shiftKey == false ){   //  
    key9.classList.add("pressedButton")
    audio9.play()
    audio9.currentTime = 0;
}



if(e.keyCode == 48 && e.shiftKey == false ){   //   #10 / 0 
    key10.classList.add("pressedButton")
    audio10.play()
    audio10.currentTime = 0;
}


if(e.keyCode == 189 && e.shiftKey == false ){   //  
    key11.classList.add("pressedButton")
    audio11.play()
    audio11.currentTime = 0;
}

if(e.keyCode == 187 && e.shiftKey == false ){   //  #12 / =   //// Last tline in row  
    key12.classList.add("pressedButton")
    audio12.play()
    audio12.currentTime = 0;
}


if(e.keyCode == 81 && e.shiftKey == false ){   //  #13 / Q    ///// New row  
    key13.classList.add("pressedButton")
    audio13.play()
    audio13.currentTime = 0;
}

if(e.keyCode == 87 && e.shiftKey == false ){   //  #14 / w / 87 
    key14.classList.add("pressedButton")
    audio14.play()
    audio14.currentTime = 0;
}

if(e.keyCode == 69 && e.shiftKey == false ){   //  /# 15  / E 
    key15.classList.add("pressedButton")
    audio15.play()
    audio15.currentTime = 0;
}



if(e.keyCode == 82 && e.shiftKey == false ){   //  /#16 / r 
    key16.classList.add("pressedButton")
    audio16.play()
    audio16.currentTime = 0;
}

if(e.keyCode == 84 && e.shiftKey == false ){   //  #17 / t  
    key17.classList.add("pressedButton")
    audio17.play()
    audio17.currentTime = 0;
}



if(e.keyCode == 89 && e.shiftKey == false ){   //  #18  / Y
    key18.classList.add("pressedButton")
    audio18.play()
    audio18.currentTime = 0;
}

if(e.keyCode == 85 && e.shiftKey == false ){   //  
    key19.classList.add("pressedButton")
    audio19.play()
    audio19.currentTime = 0;
}


if(e.keyCode == 73 && e.shiftKey == false ){   //   / I
    key20.classList.add("pressedButton")
    audio20.play()
    audio20.currentTime = 0;
}


if(e.keyCode == 79 && e.shiftKey == false ){   //   #21 / O 
    key21.classList.add("pressedButton")
    audio21.play()
    audio21.currentTime = 0;
}


if(e.keyCode == 80 && e.shiftKey == false ){   //  # P / 22 
    key22.classList.add("pressedButton")
    audio22.play()
    audio22.currentTime = 0;
}

if(e.keyCode == 219 && e.shiftKey == false ){   //  #23 / }  ///// End of second row  
    key23.classList.add("pressedButton")
    audio23.play()
    audio23.currentTime = 0;
}


if(e.keyCode == 65 && e.shiftKey == false ){   //  #24 / A  /////// Start of third row 
    key24.classList.add("pressedButton")
    audio24.play()
    audio24.currentTime = 0;
}




if(e.keyCode == 83 && e.shiftKey == false ){   //  #25 / S 
    key25.classList.add("pressedButton")
    audio25.play()
    audio25.currentTime = 0;
}



if(e.keyCode == 68 && e.shiftKey == false ){   //  #26 / D 
    key26.classList.add("pressedButton")
    audio26.play()
    audio26.currentTime = 0;
}


if(e.keyCode == 70 && e.shiftKey == false ){   //  #27 / F 
    key27.classList.add("pressedButton")
    audio27.play()
    audio27.currentTime = 0;
}




if(e.keyCode == 71 && e.shiftKey == false ){   //  #28 / G 
    key28.classList.add("pressedButton")
    audio28.play()
    audio28.currentTime = 0;
}




if(e.keyCode == 72 && e.shiftKey == false ){   //  #29 / h 
    key29.classList.add("pressedButton")
    audio29.play()
    audio29.currentTime = 0;
}


if(e.keyCode == 74 && e.shiftKey == false ){   //  #30 / J 
    key30.classList.add("pressedButton")
    audio30.play()
    audio30.currentTime = 0;
}


if(e.keyCode == 75 && e.shiftKey == false ){   //  #31 / K 
    key31.classList.add("pressedButton")
    audio31.play()
    audio31.currentTime = 0;
}



if(e.keyCode == 76 && e.shiftKey == false ){   //  #32 / L
    key32.classList.add("pressedButton")
    audio32.play()
    audio32.currentTime = 0;
}


if(e.keyCode == 186 && e.shiftKey == false ){   //  #33 / char - ; 
    key33.classList.add("pressedButton")
    audio33.play()
    audio33.currentTime = 0;
}



if(e.keyCode == 222 && e.shiftKey == false ){   //  #34 / char - '  ////end of third line 
    key34.classList.add("pressedButton")
    audio34.play()
    audio34.currentTime = 0;
}

if(e.keyCode == 90 && e.shiftKey == false ){   //  #35 /   x    ///// Start of fourth line 
    key35.classList.add("pressedButton")
    audio35.play()
    audio35.currentTime = 0;
}



if(e.keyCode == 88 && e.shiftKey == false ){   //   x
    key36.classList.add("pressedButton")
    audio36.play()
    audio36.currentTime = 0;
}

if(e.keyCode == 67 && e.shiftKey == false ){   //  c 
    key37.classList.add("pressedButton")
    audio37.play()
    audio37.currentTime = 0;
}





if(e.keyCode == 86 && e.shiftKey == false ){   //   V
    key38.classList.add("pressedButton")
    audio38.play()
    audio38.currentTime = 0;
}

if(e.keyCode == 66 && e.shiftKey == false ){  //   #39 / b 
    key39.classList.add("pressedButton")
    audio39.play()
    audio39.currentTime = 0;
}



if(e.keyCode == 78 && e.shiftKey == false ){   //   #40 n 
    key40.classList.add("pressedButton")
    audio40.play()
    audio40.currentTime = 0;
}


if(e.keyCode == 77 && e.shiftKey == false ){   //   #41 /m
    key41.classList.add("pressedButton")
    audio41.play()
    audio41.currentTime = 0;
}


if(e.keyCode == 188 && e.shiftKey == false ){   // #42 / ,   
    key42.classList.add("pressedButton")
    audio42.play()
    audio42.currentTime = 0;
}

if(e.keyCode == 190 && e.shiftKey == false ){   //   #43 /  .
    key43.classList.add("pressedButton")
    audio43.play()
    audio43.currentTime = 0;
}

if(e.keyCode == 191 && e.shiftKey == false ){   //   # 44 /  / 
    key44.classList.add("pressedButton")
    audio44.play()
    audio44.currentTime = 0;
}

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////End of sirst 44 //////////////////////////
////////////start of 2nd 44 

if(e.keyCode == 49 && e.shiftKey == true){   // starting at key 45  
    key45.classList.add("pressedButton")
    audio45.play()
    audio45.currentTime = 0;
    }
    
    if(e.keyCode == 50 && e.shiftKey == true){   // 
        key46.classList.add("pressedButton")
        audio46.play()
        audio46.currentTime = 0;
    }
    
    
    if(e.keyCode == 51 && e.shiftKey == true){   //  
        key47.classList.add("pressedButton")
        audio47.play()
        audio47.currentTime = 0;
    }
    
    if(e.keyCode == 52 && e.shiftKey == true){   //  at key 4  
        key48.classList.add("pressedButton")
        audio48.play()
        audio48.currentTime = 0;
    }    
    
    
    if(e.keyCode == 53 && e.shiftKey == true){   //  
        key49.classList.add("pressedButton")
        audio49.play()
        audio49.currentTime = 0;
    }
    
    if(e.keyCode == 54 && e.shiftKey == true ){   //  #6  / 6 
        key50.classList.add("pressedButton")
        audio50.play()
        audio50.currentTime = 0;
    }
    
    
    if(e.keyCode == 55 && e.shiftKey == true ){   //  
        key51.classList.add("pressedButton")
        audio51.play()
        audio51.currentTime = 0;
    }
    
    
    if(e.keyCode == 56 && e.shiftKey == true ){   //  #8 / 8 
        key52.classList.add("pressedButton")
        audio52.play()
        audio52.currentTime = 0;
    }
    
    
    if(e.keyCode == 57 && e.shiftKey == true ){   //  
        key53.classList.add("pressedButton")
        audio53.play()
        audio53.currentTime = 0;
    }
    
    
    
    if(e.keyCode == 48 && e.shiftKey == true ){   //   #54 / 0 
        key54.classList.add("pressedButton")
        audio54.play()
        audio54.currentTime = 0;
    }
    
    
    if(e.keyCode == 189 && e.shiftKey == true ){   //  
        key55.classList.add("pressedButton")
        audio55.play()
        audio55.currentTime = 0;
    }
    

    if(e.keyCode == 187 && e.shiftKey == true ){   //  #56 / =   //// Last tline in row  
        key56.classList.add("pressedButton")
        audio56.play()
        audio56.currentTime = 0;
    }
    
    

    if(e.keyCode == 81 && e.shiftKey == true ){   //  #57 / Q    ///// New row  
        key57.classList.add("pressedButton")
        audio57.play()
        audio57.currentTime = 0;
    }
    
    if(e.keyCode == 87 && e.shiftKey == true ){   //  #14 / w / 87 
        key58.classList.add("pressedButton")
        audio58.play()
        audio58.currentTime = 0;
    }
    
    if(e.keyCode == 69 && e.shiftKey == true ){   //  /# 15  / E 
        key59.classList.add("pressedButton")
        audio59.play()
        audio59.currentTime = 0;
    }
    
    
    
    if(e.keyCode == 82 && e.shiftKey == true ){   //  /#16 / r 
        key60.classList.add("pressedButton")
        audio60.play()
        audio60.currentTime = 0;
    }
    
    if(e.keyCode == 84 && e.shiftKey == true ){   //  #17 / t  
        key61.classList.add("pressedButton")
        audio61.play()
        audio61.currentTime = 0;
    }
    
    
    
    if(e.keyCode == 89 && e.shiftKey == true ){   //  #18  / Y
        key62.classList.add("pressedButton")
        audio62.play()
        audio62.currentTime = 0;
    }
    
    if(e.keyCode == 85 && e.shiftKey == true ){   //  
        key63.classList.add("pressedButton")
        audio63.play()
        audio63.currentTime = 0;
    }
    


    
    if(e.keyCode == 73 && e.shiftKey == true ){   //  #64  / I
        key64.classList.add("pressedButton")
        audio64.play()
        audio64.currentTime = 0;
    }
    
    

















    if(e.keyCode == 79 && e.shiftKey == true ){   //   #65 / O 
        key65.classList.add("pressedButton")
        audio65.play()
        audio65.currentTime = 0;
    }
    
    
    if(e.keyCode == 80 && e.shiftKey == true ){   //  #66 / P 
        key66.classList.add("pressedButton")
        audio66.play()
        audio66.currentTime = 0;
    }
    
    if(e.keyCode == 219 && e.shiftKey == true ){   //  #67 / }  ///// End of second row  
        key67.classList.add("pressedButton")
        audio67.play()
        audio67.currentTime = 0;
    }
    
    
    if(e.keyCode == 65 && e.shiftKey == true  ){   //  #68 / A  /////// Start of third row 
        key68.classList.add("pressedButton")
        audio68.play()
        audio68.currentTime = 0;
    }
    
    // Good above  
    
    
    if(e.keyCode == 83 && e.shiftKey == true ){   //  #69 / S 
        key69.classList.add("pressedButton")
        audio69.play()
        audio69.currentTime = 0;
    }
    
    
    
    if(e.keyCode == 68 && e.shiftKey == true ){   //  #70 / D 
        key70.classList.add("pressedButton")
        audio70.play()
        audio70.currentTime = 0;
    }
    
    
    if(e.keyCode == 70 && e.shiftKey == true ){   //  #71 / F 
        key71.classList.add("pressedButton")
        audio71.play()
        audio71.currentTime = 0;
    }
    
    
    
    
    if(e.keyCode == 71 && e.shiftKey == true ){   //  #72 / G 
        key72.classList.add("pressedButton")
        audio72.play()
        audio72.currentTime = 0;
    }
    
    
    
    
    if(e.keyCode == 72 && e.shiftKey == true ){   //  #73 / h 
        key73.classList.add("pressedButton")
        audio73.play()
        audio73.currentTime = 0;
    }
    
    
    if(e.keyCode == 74 && e.shiftKey == true ){   //  #74 / J 
        key74.classList.add("pressedButton")
        audio74.play()
        audio74.currentTime = 0; 
        // Signature  J-74 Format , becaue the character and number of J is ironically  are both 74 in JS. 
    }
    
    
    if(e.keyCode == 75 && e.shiftKey == true ){   //  #75 / K 
        key75.classList.add("pressedButton")
        audio75.play()
        audio75.currentTime = 0;
    }
    
    
    
    if(e.keyCode == 76 && e.shiftKey == true ){   //  #76 / L
        key76.classList.add("pressedButton")
        audio76.play()
        audio76.currentTime = 0;
    }
    
    
    if(e.keyCode == 186 && e.shiftKey == true ){   //  #33 / char - ; 
        key77.classList.add("pressedButton")
        audio77.play()
        audio77.currentTime = 0;
    }
    
    
    
    if(e.keyCode == 222 && e.shiftKey == true ){   //  #76 /   ////end of third line 
        key78.classList.add("pressedButton")
        audio78.play()
        audio78.currentTime = 0;
    }
    
    if(e.keyCode == 90 && e.shiftKey == true ){   //  #77 /   '   ///// Start of fourth line 
        key79.classList.add("pressedButton")
        audio79.play()
        audio79.currentTime = 0;
    }
    
    
    
    if(e.keyCode == 88 && e.shiftKey == true ){   //   x
        key80.classList.add("pressedButton")
        audio80.play()
        audio80.currentTime = 0;
    }
    


    if(e.keyCode == 67 && e.shiftKey == true ){   //  c 
        key81.classList.add("pressedButton")
        audio81.play()
        audio81.currentTime = 0;
    }
    
    
    
    
    
    if(e.keyCode == 86 && e.shiftKey == true ){   //   V
        key82.classList.add("pressedButton")
        audio82.play()
        audio82.currentTime = 0;
    }
    
    if(e.keyCode == 66 && e.shiftKey == true ){  //   #39 / b 
        key83.classList.add("pressedButton")
        audio83.play()
        audio83.currentTime = 0;
    }
    
    
    
    if(e.keyCode == 78 && e.shiftKey == true ){   //   #40 n 
        key84.classList.add("pressedButton")
        audio84.play()
        audio84.currentTime = 0;
    }
    
    
    if(e.keyCode == 77 && e.shiftKey == true ){   //   #41 /m
        key85.classList.add("pressedButton")
        audio85.play()
        audio85.currentTime = 0;
    }
    
    
    if(e.keyCode == 188 && e.shiftKey == true ){   // #42 / ,   
        key86.classList.add("pressedButton")
        audio86.play()
        audio86.currentTime = 0;
    }
    
    if(e.keyCode == 190 && e.shiftKey == true ){   //   #43 /  .
        key87.classList.add("pressedButton")
        audio87.play()
        audio87.currentTime = 0;
    }
    
    if(e.keyCode == 191 && e.shiftKey == true ){   //   # 44 /  / 
        key88.classList.add("pressedButton")
        audio88.play()
        audio88.currentTime = 0;
    }















} 

// fireSounds() end 





/////// Last two event handlers  to fire code and remove styling 



// Transition cleaner 
window.addEventListener("transitionend" , function clearStyle(e){
    key1.classList.remove("pressedButton");
    key2.classList.remove("pressedButton");
    key3.classList.remove("pressedButton");
    key4.classList.remove("pressedButton");
    key5.classList.remove("pressedButton");
    key6.classList.remove("pressedButton");
    key7.classList.remove("pressedButton");
    key8.classList.remove("pressedButton");
    key9.classList.remove("pressedButton");
    key10.classList.remove("pressedButton");
    key11.classList.remove("pressedButton");
    key12.classList.remove("pressedButton");
    key13.classList.remove("pressedButton");
    key14.classList.remove("pressedButton");
    key15.classList.remove("pressedButton");
    key16.classList.remove("pressedButton");
    key17.classList.remove("pressedButton");
    key18.classList.remove("pressedButton");
    key19.classList.remove("pressedButton");
    key20.classList.remove("pressedButton");
    key21.classList.remove("pressedButton");
    key22.classList.remove("pressedButton");
    key23.classList.remove("pressedButton");
    key24.classList.remove("pressedButton");
    key25.classList.remove("pressedButton");
    key26.classList.remove("pressedButton");
    key27.classList.remove("pressedButton");
    key28.classList.remove("pressedButton");
    key29.classList.remove("pressedButton");
    key30.classList.remove("pressedButton");
    key31.classList.remove("pressedButton");
    key32.classList.remove("pressedButton");
    key33.classList.remove("pressedButton");
    key34.classList.remove("pressedButton");
    key35.classList.remove("pressedButton");
    key36.classList.remove("pressedButton");
    key37.classList.remove("pressedButton");
    key38.classList.remove("pressedButton");
    key39.classList.remove("pressedButton");
    key40.classList.remove("pressedButton");
    key41.classList.remove("pressedButton");
    key42.classList.remove("pressedButton");
    key43.classList.remove("pressedButton");
    key44.classList.remove("pressedButton");
    key45.classList.remove("pressedButton");
    key46.classList.remove("pressedButton");
    key47.classList.remove("pressedButton");
    key48.classList.remove("pressedButton");
    key49.classList.remove("pressedButton");
    key50.classList.remove("pressedButton");
    key51.classList.remove("pressedButton");
    key52.classList.remove("pressedButton");
    key53.classList.remove("pressedButton");
    key54.classList.remove("pressedButton");
    key55.classList.remove("pressedButton");
    key56.classList.remove("pressedButton");
    key57.classList.remove("pressedButton");
    key58.classList.remove("pressedButton");
    key59.classList.remove("pressedButton");
    key60.classList.remove("pressedButton");
    key61.classList.remove("pressedButton");
    key62.classList.remove("pressedButton");
    key63.classList.remove("pressedButton");
    key64.classList.remove("pressedButton");
    key65.classList.remove("pressedButton");
    key66.classList.remove("pressedButton");
    key67.classList.remove("pressedButton");
    key68.classList.remove("pressedButton");
    key69.classList.remove("pressedButton");
    key70.classList.remove("pressedButton");
    key71.classList.remove("pressedButton");
    key72.classList.remove("pressedButton");
    key73.classList.remove("pressedButton");
    key74.classList.remove("pressedButton");
    key75.classList.remove("pressedButton");
    key76.classList.remove("pressedButton");
    key77.classList.remove("pressedButton");
    key78.classList.remove("pressedButton");
    key79.classList.remove("pressedButton");
    key80.classList.remove("pressedButton");
    key81.classList.remove("pressedButton");
    key82.classList.remove("pressedButton");
    key83.classList.remove("pressedButton");
    key84.classList.remove("pressedButton");
    key85.classList.remove("pressedButton");
    key86.classList.remove("pressedButton");
    key87.classList.remove("pressedButton");
    key88.classList.remove("pressedButton");

})



let audios = document.getElementsByClassName(".audio")


// Listener and function firer 
window.addEventListener("keydown" , (e)=>{ 
// e.view.onkeydown = fireSounds(e) 

// Firing sounds 
fireSounds(e) 

// Pausing sounds on key up 


window.addEventListener("keyup",(e)=>{

  

audio1.pause()
audio2.pause()
audio3.pause()
audio4.pause()
audio5.pause()
audio6.pause()
audio7.pause()
audio8.pause()
audio9.pause()
audio10.pause()
audio11.pause()
audio12.pause()
audio13.pause()
audio14.pause()
audio15.pause()
audio16.pause()
audio17.pause()
audio18.pause()
audio19.pause()
audio20.pause()
audio21.pause()
audio22.pause()
audio23.pause()
audio24.pause()
audio25.pause()
audio26.pause()
audio27.pause()
audio28.pause()
audio29.pause()
audio30.pause()
audio31.pause()
audio32.pause()
audio33.pause()
audio34.pause()
audio35.pause()
audio36.pause()
audio37.pause()
audio38.pause()
audio39.pause()
audio40.pause()
audio41.pause()
audio42.pause()
audio43.pause()
audio44.pause()
audio45.pause()
audio46.pause()
audio47.pause()
audio48.pause()
audio49.pause()
audio50.pause()
audio51.pause()
audio52.pause()
audio53.pause()
audio54.pause()
audio55.pause()
audio56.pause()
audio57.pause()
audio58.pause()
audio59.pause()
audio60.pause()
audio61.pause()
audio62.pause()
audio63.pause()
audio64.pause()
audio65.pause()
audio66.pause()
audio67.pause()
audio68.pause()
audio69.pause()
audio70.pause()
audio71.pause()
audio72.pause()
audio73.pause()
audio74.pause()
audio75.pause()
audio76.pause()
audio76.pause()
audio77.pause()
audio78.pause()
audio79.pause()
audio80.pause()
audio81.pause()
audio82.pause()
audio83.pause()
audio84.pause()
audio85.pause()
audio86.pause()
audio87.pause()
audio88.pause()


})


  console.log(e)

}) 



// add event listener , for keyup to stop sounds here  , 
// Call func in that event listener .

function stopSounds(e){ 
/// I will make the tone stop when the keyboard is lifted up here later  



}





