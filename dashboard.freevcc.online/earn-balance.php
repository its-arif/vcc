<!DOCTYPE html>
<html lang="en">

<head>
    <title>Earn Balance - Free VCC</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            text-align: center;
        }

        #offerContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        .offer {
            background-color: #f20f10;
            color: white;
            padding: 10px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%; /* Adjust the width as needed */
            border: 2px solid black;
            border-radius: 6px;
        }

        .offer a {
            text-decoration: none;
            color: white;
            font-weight: bold; /* Make the text bold */
            padding: inherit;
        }

        .number-button {
            background-color: #ffffff;
            color: #4CAF50;
            padding: 12px 17px;
            border: 1px solid black;
            cursor: not-allowed;
            font-weight: 900;
            height: 100%;
            border-radius: 6px;
}

  /* Inline style for the info bar */
        .info-bar {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            text-align: center;
            margin-top: 20px;
            border-radius: 6px;
        }

    </style>
</head><body class="overflow-x-hidden pre-loaded" data-new-gr-c-s-check-loaded="14.1108.0" data-gr-ext-installed="">
    <!-- Use overflow-x-hidden class if you use same slider as client section slider -->
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"9162955bb9f59f98","version":"2025.1.0","r":1,"token":"6f37cbc189574e888ba80fd3d11116a1","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}}}' crossorigin="anonymous"></script>
</body>

    <div class="info-bar">
       You will receive $1.00 in your account for every completed offer below.
    </div>
    
    <div id="offerContainer"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script type="text/javascript">
        $(function() {
            $.getJSON("https://d390icj1ta4x0p.cloudfront.net/public/offers/feed.php?user_id=402037&api_key=1f6bbf1a5a9999b80fa2d3312faa1474&s1=&s2=",
                function(offers){
                    var html = '';
                    var numOffers = 5; // Change to trim offers. Max is 10.
                    offers = offers.splice(0, numOffers);
                    $.each(offers, function(key, offer){
                        html += '<div class="offer"><a href="'+offer.url+'" target="_blank" title="'+offer.conversion+'">'+offer.anchor+'</a><button class="number-button">$1.00</button></div>';
                    });
                    $("#offerContainer").append(html);
                });
        });
    </script>
</html>