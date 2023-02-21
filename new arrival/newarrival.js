var moreless=true;
var moreless1=true;
var moreless2=true;
function view()
{
  if(moreless)
  {
  document.getElementById('des').innerHTML="The name rain lilies comes from their tendency to send up flushes of flowers within a few days after a soaking rain.Elegant and easy to grow, rain lilies liven up gardens with funnel- to goblet-shaped flowers in a range of colors. Different species bloom at different times, so you can enjoy their blooms throughout much of the growing season if you grow several kinds.";
    document.getElementById('more').innerHTML="...Less";
    moreless=false;
  }
  else {
    document.getElementById('des').innerHTML="The name rain lilies comes from their tendency to send up flushes of flowers within a few days after a soaking rain.";
      document.getElementById('more').innerHTML="...More";
      moreless=true;

  }


}
function view1()
{
  if(moreless1)
  {
  document.getElementById('des1').innerHTML="Pirandai is very useful for stomach as well as heart. It will set right gastric disorder and protect the heart.Pirandai is of multifarious types such as ordinary pirandai, red pirandai, uruttu pirandai or ball-shaped pirandai, muppirandai, thattai pirandai or square pirandai, kalipirandai, theempirandai, puli pirandai and olai pirandai. Its botanical name is ‘Cissus quadrangularis’ and is also called ‘viggravalli’. It belongs to creeper variety.";
    document.getElementById('more1').innerHTML="...Less";
    moreless1=false;
  }
  else {
    document.getElementById('des1').innerHTML="Pirandai is very useful for stomach as well as heart. It will set right gastric disorder and protect the heart.";
      document.getElementById('more1').innerHTML="...More";
      moreless1=true;

  }


}

function view2()
{
  if(moreless2)
  {
  document.getElementById('des2').innerHTML="Vetiver is sometimes applied directly to the skin for relieving stress, as well as for emotional traumas and shock, lice, and repelling insects.It is also used for arthritis, stings, and burns. Vetiver is sometimes inhaled as aromatherapy for nervousness, insomnia, and joint and muscle pain.";
    document.getElementById('more2').innerHTML="...Less";
    moreless2=false;
  }
  else {
    document.getElementById('des2').innerHTML="Vetiver is sometimes applied directly to the skin for relieving stress,as well as for emotional traumas and shock,";
      document.getElementById('more2').innerHTML="...More";
      moreless2=true;

  }


}
