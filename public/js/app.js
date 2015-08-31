//On page load
$(function() {
  pageLoad();
});

// function definitions

function pageLoad() {
  // load phrase
  getPhrases();
  // set event listeners
  $("#new-phrase-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post to phrase#create
    $.post("/phrases", $(this).serialize())
      .done(function(res){
        // append new phrase to the page
        getPhrases();
        $("#new-phrase-form")[0].reset();
      });
  });
}

function getPhrases() {
  $.get("/phrases", function(res){
    var phrases = res.reverse();
    //console.log(phrases);
    // grab phrase template
    renderPhrases(phrases);
  });
}

function renderPhrases(phrases) {
  template = _.template($("#phrases-template").html());
  // input phrases into template and append to parent
  phraseItems = phrases.map(function(phrase) {
    return template({_id:phrase._id, word: phrase.word, definition: phrase.definition});
  });
  // clear content (for repeated use)
  $("#phrase-ul").html("");
  // append phrase to ul
  $("#phrase-ul").append(phraseItems);
}

// function deletePhrase(context) {
//   var phraseId = $(context).data()._id;
//   $.ajax({
//     url: '/phrases/' + phraseId,
//     type: 'DELETE',
//     success: function(res) {
//       // once successfull, re-render all phrases
//       getPhrases();
//     }
//   });
// }