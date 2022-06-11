$(function () {
    let videoPath = ["../public/animations/blood_pyramid_6_10_22.mp4", "../public/animations/striped_lines_6_10_22.mp4",
    "../public/animations/christmas_tree_6_10_22.mp4", "../public/animations/spider_web_6_11_22.mp4"];
    
    // let thumbNailPath = ["../public/animations/thumbnails/Striped Lines.png", "../public/animations/thumbnails/blood pyramid.png",
    // "../public/animations/thumbnails/Christmas Tree.png", "../public/animations/thumbnails/Locking Web.png"];

    for (let i = 0; i < videoPath.length; i++) {
      let videoDiv = $("<div class='img-w'></div>");
      videoDiv.appendTo($(".gallery"));
  
      videoDiv.wrap("<div class='img-c'></div>");


        const video = document.createElement('video');
        video.src = videoPath[i] + "#t=30";
        // video.poster = thumbNailPath[i];
        video.autoplay = false;
        video.controls = true;
        video.muted = false;
        video.height = 400;
        video.width = 400;
        video.id = "artVid";
        

    videoDiv.append(video);
    videoDiv.attr("notYetPlayed", true);
    }
    
    $(".img-w").on("click", function () {
        if($(this).attr("notYetPlayed") == "true") {
            let video = $(this).find("video").get(0);
            video.currentTime = 0;
            

            $(this).attr("notYetPlayed", false);

        }
    
      });
    
});