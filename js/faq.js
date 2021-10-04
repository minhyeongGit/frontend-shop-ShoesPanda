$(function() {
	$.fn.extend({
		qna:function(){
			var ts = $(this);
			$.each(ts,function(i,o){
				$("button",o).on("click",qnaHanddler);
				// 버튼 클릭 됐을때 만든 메서드 실행
				function qnaHanddler(){
					if($(this).parent().next().is(":hidden")){
						// 지금 요소의 부모 다음의 컨텐츠가 히든일때
						$("li>div:visible",o).hide();
						// 요소가 보이고 있는 상태면 가리고
						$(this).parent().next().show();
						// 부모의 다음 컨텐츠를 보여라
					} else {
						$("li>div:visible",o).hide();
					}
				} //qnaHanddler 종료
			}); //each 종료
		}//qna function 종료
	});//extend 종료
	$(".faq").qna();
});