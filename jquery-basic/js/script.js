$(function () {
  const title = $('#title').text();
  const list = $('.message').text();
  console.log(title);
  console.log(list);

  //class属性値の戦闘が「sample」の要素だけを出力する
  const text = $('li[class^="sample"]').text();
  console.log(text);
});

