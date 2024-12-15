const textarea = document.getElementById("editor");
const preview = document.getElementById("preview");
textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
const markdown = textarea.value;
preview.textContent = markdown;
const html =convertMarkdownToHTML(markdown);//convert it
preview.innerHTML = html; //display converted HTML in preview
preview.innerHTML
    }
  });


  function convertMarkdownToHTML(markdown){

    // convert # Heading
    markdown = markdown.replace(/^#(.*)$/gm,"<h1>$1</h1>");

    //convert bold (**bold**)
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    //convert italic(*italic*)
    markdown = markdown.replace(/(\*|_)(.*?)\1/g, " <em>$2</em>");
return markdown; //return the converted HTML

  }
  