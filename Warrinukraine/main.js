var mas = ['.button','.else','.links','.flop','.look','.win'],
    url = ["index1.html","index2.html","index3.html","index4.html","index5.html",'volonter.html'];
$(mas[0]).click(function(){
    $(location).attr('href',url[0]);
});
$(mas[1]).click(function(){
    $(location).attr('href',url[1]);
});
$(mas[2]).click(function(){
    $(location).attr('href',url[2]);
});
$(mas[3]).click(function(){
    $(location).attr('href',url[3]);
});
$(mas[4]).click(function(){
    $(location).attr('href',url[4]);
});
$(mas[5]).click(function(){
  $(location).attr('href',url[5]);
});
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('openDoor');
      }
    });
  }
  let number = { threshold: [0.5] };
  let server = new IntersectionObserver(onEntry, number);
  let elem = document.querySelectorAll('.closeDoor');
  for (let i of elem) {
    server.observe(i);
  }
  document.querySelector('#phone').onkeydown = function(its){
    inputphone(its,document.querySelector('#phone'))
    }
    function inputphone(its, phone){
    function stop(evt) {
        evt.preventDefault();
    }
    let key = its.key, value = phone.value; rep = key.replace(/([0-9])/, 1)
      if(rep == 1 || 'Backspace' === rep){
      if('Backspace' != rep){ 
          if(value.length < 4 || value ===''){phone.value= '+38('}
          if(value.length === 7){phone.value= value +')'}
          if(value.length === 11){phone.value= value +'-'}
          }
      }else{stop(its)}  }
    //   function jutsu(){
    //   document.querySelector('#ju').classList.add('jutsu');
    // console.log('good job')}
    //   function cli(a){
    //     for(i = a;i<361;i++){
    //     document.querySelector('.clishe').style.cssText='transform: rotate('+i+'deg);';}
    // }