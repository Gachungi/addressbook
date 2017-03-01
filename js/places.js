function Contact(location, landmark, year, notes) {
    this.location = location;
    this.landmark = landmark;
    this.year = year;
    this.notes =notes;
  }
  Contact.prototype.fullName = function() {
  return this.location + " " + this.landmark + " " + this.year + " " + this.notes;
}

  // user interface logic
  $(document).ready(function() {
    $("form#new-location").submit(function(event) {
      event.preventDefault();

      var inputtedLocation = $("input#new-location").val();
      var inputtedLandmark = $("input#landmark").val();
      var inputtedYear = $("input#year").val();
      var inputtedNotes = $("input#notes").val();

      var newLocation = new Contact(inputtedLocation, inputtedLandmark, inputtedYear, inputtedNotes);

    $("ul#contacts").append("<li><span class='contact'>" + newLocation.fullName() + "</span></li>");
      $(".contact").last().click(function() {
          $("#show-contact").show();
          $("#show-contact h2").text(newLocation.location);
          $(".location1").text(newLocation.location);
          $(".landmark1").text(newLocation.landmark);
          $(".year1").text(newLocation.year);
          $(".notes").text(newLocation.notes);
        });

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
  });
