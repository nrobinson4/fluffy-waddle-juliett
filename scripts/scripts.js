$(document).ready(function() {

    // Add 'active' class to military phonetic option by default, for input purposes 
    $('#militaryPhoneticOption').addClass('active');

    var phoneticAlphabet = {
        'A': 'Alpha',
        'B': 'Bravo',
        'C': 'Charlie',
        'D': 'Delta',
        'E': 'Echo',
        'F': 'Foxtrot',
        'G': 'Golf',
        'H': 'Hotel',
        'I': 'India',
        'J': 'Juliett',
        'K': 'Kilo',
        'L': 'Lima',
        'M': 'Mike',
        'N': 'November',
        'O': 'Oscar',
        'P': 'Papa',
        'Q': 'Quebec',
        'R': 'Romeo',
        'S': 'Sierra',
        'T': 'Tango',
        'U': 'Uniform',
        'V': 'Victor',
        'W': 'Whiskey',
        'X': 'X-ray',
        'Y': 'Yankee',
        'Z': 'Zulu',
        '.': 'Dot',
        '!': 'Bang',
        '*': 'Splat',
        '<': 'Waka',
        '>': 'Waka',
        '/': 'Slash',
        "'": 'Tick',
        '#': 'Hash',
        '$': 'Dollar',
        '%': 'Percent',
        '&': 'Ampersand',
        ',': 'Comma',
        '~': 'Tilde',
        '`': 'Backtick',
        '|': 'Pipe',
        '^': 'Caret',
        '@': 'At',
        '?': 'Question',
        ':': 'Colon',
        ';': 'Semicolon',
        '-': 'Dash',
        '_': 'Underscore',
        '+': 'Plus',
        '=': 'Equals'
    };
    var civilianAlphabet = {
        'A': 'Adam',
        'B': 'Boy',
        'C': 'Charles',
        'D': 'David',
        'E': 'Edward',
        'F': 'Frank',
        'G': 'George',
        'H': 'Henry',
        'I': 'Ida',
        'J': 'John',
        'K': 'King',
        'L': 'Lincoln',
        'M': 'Mary',
        'N': 'Nora',
        'O': 'Ocean',
        'P': 'Paul',
        'Q': 'Queen',
        'R': 'Robert',
        'S': 'Sam',
        'T': 'Tom',
        'U': 'Union',
        'V': 'Victor',
        'W': 'William',
        'X': 'X-ray',
        'Y': 'Young',
        'Z': 'Zebra',
        '.': 'Dot',
        '!': 'Bang',
        '*': 'Splat',
        '<': 'Waka',
        '>': 'Waka',
        '/': 'Slash',
        "'": 'Tick',
        '#': 'Hash',
        '$': 'Dollar',
        '%': 'Percent',
        '&': 'Ampersand',
        ',': 'Comma',
        '~': 'Tilde',
        '`': 'Backtick',
        '|': 'Pipe',
        '^': 'Caret',
        '@': 'At',
        '?': 'Question',
        ':': 'Colon',
        ';': 'Semicolon',
        '-': 'Dash',
        '_': 'Underscore',
        '+': 'Plus',
        '=': 'Equals'
    };
     // Function to generate the phonetic conversion
     function generatePhoneticConversion(text, alphabet) {
        var outputList = '';
        for (var i = 0; i < text.length; i++) {
            var letter = text[i];
            if (letter in alphabet) {
                outputList += '<li class="list-group-item">' + letter + ': ' + alphabet[letter] + '</li>';
            } else {
                outputList += '<li class="list-group-item">' + letter + '</li>';
            }
        }
        return outputList;
    }

    // Function to update the output list with animation
    function updateOutputListWithAnimation(text, alphabet) {
        var outputList = generatePhoneticConversion(text.toUpperCase(), alphabet);
        $('#outputList').html(outputList);
        $('#outputList').children(':last').hide().fadeIn(500); // Fade in only the newest list item
    }

    // Event listener for text input
    $('#textInput').on('input', function() {
        var text = $(this).val();
        if ($('#militaryPhoneticOption').hasClass('active')) {
            updateOutputListWithAnimation(text, phoneticAlphabet);
        } else if ($('#civilianPhoneticOption').hasClass('active')){
            updateOutputListWithAnimation(text, civilianAlphabet);
        }
    });

    // Event listener for clear button
    $('#clearButton').click(function() {
        $('#textInput').val('');
        $('#outputList').empty();
    });

    var militaryLabel = 'Enter Text to be Converted to Military Talk:';
    var civilianLabel = 'Enter Text to be Converted to Civilian Talk:';

    function updateOutputWithMilitaryAlphabet() {
        var text = $('#textInput').val();
        updateOutputListWithAnimation(text, phoneticAlphabet);
        $('#textInputLabel').text(militaryLabel);
    }
    
    function updateOutputWithCivilianAlphabet() {
        // Remove 'active' class from military phonetic option
        $('#militaryPhoneticOption').removeClass('active');
        
        // Add 'active' class to civilian
        $('#civilianPhoneticOption').addClass('active');
    
        // Update the label
        $('#textInputLabel').text(civilianLabel);
    
        // Update the output list with civilian alphabet
        var text = $('#textInput').val();
        updateOutputListWithAnimation(text, civilianAlphabet);
    }
    
    // Event listener for military phonetic option
    $('#militaryPhoneticOption').click(updateOutputWithMilitaryAlphabet);
    
    // Event listener for civilian phonetic option
    $('#civilianPhoneticOption').click(updateOutputWithCivilianAlphabet);
    
    
    
    // Trigger military phonetic option by default
    $('#militaryPhoneticOption').click();
});
