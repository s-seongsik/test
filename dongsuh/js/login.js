$(document).ready(function(){
  // 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
    $("#idCheck").change(function(){ // 체크박스에 변화가 있다면,
        if($("#idCheck").is(":checked")){ // ID 저장하기 체크했을 때,
            setCookie("key", $("#id").val(), 7); // 7일 동안 쿠키 보관
        }else{ // ID 저장하기 체크 해제 시,
            deleteCookie("key");
        }
    });

    // ID 저장하기를 체크한 상태에서 ID를 입력하는 경우, 이럴 때도 쿠키 저장.
    $("#id").keyup(function(){ // ID 입력 칸에 ID를 입력할 때,
        if($("#idCheck").is(":checked")){ // ID 저장하기를 체크한 상태라면,
            setCookie("key", $("#id").val(), 7); // 7일 동안 쿠키 보관
        }
    });

    $('#login_btn').on('click', login_submit);
});

function login_submit(){
  /* $('#login_btn').prop('disabled',true); */
  var id = $('#id').val();
  var passWord = $('#pw').val();

  //validation check

  $('input[name=password]').val(passWord);
  // check end
  var dataList = {
    id: id,
    password : passWord
  };

  var f = $('#loginForm');
  $.mobile.loading("show");
  $.ajax({
    /** Login controller
    김정택 차장님께 정보 받아서 넣기.
    **/
    url: '/loginAction',
    data: f.serialize(
    ),
    dataType: "json",
    type: 'POST',
    success: function(data) {
      if(data){
        if(data.result_cd == '200'){
          $('#loginId').val(data.result_id);
          $('#login_btn').prop('disabled',false);
          //$('#gotoMain').click();
          window.location.href = 'main/index.html';
          return false;
        }else{
          infoBox(data.result_msg);
          $('#login_btn').prop('disabled',false);
          return false;
        }
      }
      },
    error: function(data) {
      infoBox(data.result_msg);
      $('#login_btn').prop('disabled',false);
      return false;
    }
  });
  //$('#loginForm').submit();
  return false;
}
