var images=[
    "hiral.jpg",
    "hardik.jpg",
    "priyal.jpg",
    "pari.jpg",
    "dad.jpg",
    "mom.jpg",
    "chacha.jpg",
    "chachi.jpg",
    "dada.jpg",
    "dadi.jpg",
    "bhua.jpg"
   ];
   var names=[
       "Hi it's me Hiral bumb, the developer of this webpage.","He is my lovely brother Hardik Bumb.",
       "She is my elder sister Priyal Bumb","She is also my elder and very caring sister Vanshika Bumb.",
       "He is my Super Hero Mr.Akhilesh Bumb.","She is my heart my Mom Mrs.Ritu Bumb",
       "He is my lovely chacha Mr.Manish Bumb","She is my very caring chachi Mrs.Alka Bumb",
       "He is my very active & energetic grandpa Mr.Tansukh Lal Ji Bumb.","She is my caring & beautiful granny Mrs.Diksha Devi Bumb",
       "She is my very intelligent,beautiful & loving bhua Mrs.Priyanka Khurdia."
   ];
   var i=0;
   function changeimage()
   {
     document.getElementById("image1").src=
       images[i];
      i++;
      if(i==11)
     {
       i=0
     }
   }