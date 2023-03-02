function selectDesigner() {
  const style = document.getElementById("style-select").value;
  let designer;
  
  if (style === "mid-century-modern") {
    const designers = ["Charles and Ray Eames", "George Nelson", "Eero Saarinen", "Harry Bertoia"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "contemporary") {
    const designers = ["Kelly Wearstler", "Jean-Louis Deniot", "Ryan Korban", "India Mahdavi", "Rafael de Cárdenas", "Ilse Crawford"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "traditional") {
    const designers = ["Bunny Williams", "Miles Redd", "Suzanne Kasler","Mark D. Sikes" ,"Alexa Hampton" ,"Thomas O'Brien" ,"Jeffrey" ,"Bilhuber" ,"Victoria Hagan" ,"Robert Couturier" ,"Mary McDonald"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "transitional") {
    const designers = ["Kelly Hoppen", "Jeff Lewis" ,"Nate Berkus" ,"Candice Olson" ,"Thom Filicia" ,"Martyn Lawrence Bullard" ,"Timothy Corrigan" ,"Suzanne Kasler" ,"Tobi Fairley" ,"Barbara Barry"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "industrial") {
    const designers = ["Tom Dixon" ,"Marcel Wanders" ,"Karim Rashid" ,"Philippe Starck" ,"Kelly Wearstler" ,"Jaime Hayon" ,"Ross Lovegrove" ,"Patricia Urquiola" ,"Ilse Crawford" ,"Ron Arad"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "minimalist") {
    const designers = ["John Pawson" ,"Axel Vervoordt" ,"Vincent Van Duysen" ,"Deborah Berke" ,"Michael Gabellini" ,"Claudio Silvestrin" ,"Joe Colombo" ,"Tadao Ando" ,"Norm Architects" ,"John Saladino"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "bohemian") {
    const designers = ["Justina Blakeney" ,"Abigail Ahern" ,"Emily Katz" ,"Lotta Agaton" ,"Amber Lewis" ,"Jungalow" ,"Amber Interiors" ,"Anna Spiro" ,"Sarah Sherman Samuel" ,"Katie Hodges Design"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "scandinavian") {
    const designers = ["Ilse Crawford" ,"Norm Architects" ,"Gubi" ,"Jonas Bjerre-Poulsen" ,"Hans Wegner" ,"Arne Jacobsen" ,"Alvar Aalto" ,"Poul Henningsen" ,"Josef Frank" ,"Marimekko"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "coastal") {
    const designers = ["Amanda Lindroth" ,"Barclay Butera" ,"Anne Hepfer" ,"Suzanne Kasler" ,"Mark D. Sikes" ,"Meg Braff" ,"Serena & Lily" ,"John Robshaw" ,"Kathryn M. Ireland" ,"Celerie Kemble"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "rustic") {
    const designers = ["Ralph Lauren Home" ,"Chip and Joanna Gaines" ,"Amish Country Builders" ,"Tom Kundig" ,"Rocky Mountain Homes" ,"Jayson Home" ,"Markham Roberts" ,"Michael S. Smith" ,"Reath Design" ,"The Ranch Mine"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "vintage") {
    const designers = ["Bunny Williams", "Sarah Richardson", "Emily Henderson", "Jonathan Adler", "Miles Redd", "Nate Berkus", "Joanna Gaines", "Suzanne Kasler", "Vicente Wolf"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "art-deco") {
    const designers = ["Emile-Jacques Ruhlmann", "Eileen Gray", "Jean-Michel Frank", "Jacques-Emile Ruhlmann", "Dorothy Draper", "Paul Follot ", "Jules Leleu", "Donald Deskey", "Gio Ponti "];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "neoclassical") {
    const designers = ["neoclassical", "Jacques-Louis David", "Jean-Francois", "James Stuart", "Charles Percier and Pierre Fontaine ", "Thomas Hope", "Giovanni Battista Piranesi ", "Karl Friedrich Schinkel ", "George IV "];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "eclectic") {
    const designers = ["Dorothy Draper", "Kelly Wearstler", "Marcel Wanders", "Miles Redd", "India Mahdavi ", "Jonathan Adler", "Tom Dixon ", "Jamie Drake", "Philippe Starck"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "mediterranean") {
    const designers = ["Juan Pablo Molyneux", "Jacques Garcia", "Michael S. Smith ", "Suzanne Kasler", "Luis Bustamante", "Jorge Canete", "SJB ", "Jeffrey Bilhuber", "Josep Juanpere"];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "Gothic") {
    const designers = ["Timothy Corrigan", "Jacques Garcia", "Ken Fulk ", "Charlotte Moss", "Andrés Jaque", "David Collins Studio", "Rose Uniacke", "Juan Montoya", "Alex Papachristidis "];
    designer = designers[Math.floor(Math.random() * designers.length)];
  } else if (style === "Zen") {
    const designers = ["Clodagh ", "Axel Vervoordt", "Tadao Ando ", "Vincent Van Duysen", "Steven Harris", "David Collins Studio", "Rose Uniacke", "Juan Montoya", "Alex Papachristidis "];
    designer = designers[Math.floor(Math.random() * designers.length)];
  }
  return designer;
  //document.getElementById("designer").innerHTML = `Selected Designer: ${designer}`;
}