function matrixActions (event){
		for(var row = 0;row < matrix1.row;row++) {
			if(matrix1.matrix[matrix1.place][row] == 1){
               synthPlay(row);
	}}};
    
	function slider1Actions (data){
		filter1.frequency.value = slider1.val.value;
	};
	
	function slider2Actions (data){
		filter2.frequency.value = slider2.val.value;
	};
	
	function synthPlay (row) {
		synth.triggerAttackRelease(oscFreq[row], '4n');
	};
	
	var buttonActions = function(event) {            
			for (var i = 0;i < matrix1.col;i++) {
							for (var j = 0;j < matrix1.row;j++) {
								if (matrix1.matrix[i][j] == 1) {
									matrix1.setCell(i,j,false);
	}}}};
	
	var toggleActions = function(event) {
        
        if (event.value == 1 ){
            matrix1.sequenceMode = "random";
        }
        else {
            matrix1.sequenceMode = "linear";
    }};
	
	function numberActions (data){
		Tone.Transport.bpm.value = number1.val.value;
		matrix1.sequence(number1.val.value);
	};