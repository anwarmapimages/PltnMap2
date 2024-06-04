
    var fences = [
        Safad_fence, Akka_fence, Alnasra_fence, Haifa_fence, Bahriatabria_fence, Tiberias_fence,
        Bisan_fence, Tubas_fence, Jenin_fence, Nablus_fence, Tulkarm_fence,
        Qalqilya_fence, Yaffa_fence, Ramla_fence, Lod_fence, Salfit_fence,
        Ramallah_fence, Jericho_fence, Jerusalem_fence, Deadsea_fence, 
        Bethlehem_fence, Hebron_fence, Gaza_fence, Beersheba_fence
    ];



// Add mouseover event listener to Safad_fence
Safad_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#32AA32"}); //40% shadow
    this.setOptions({strokeColor: "#FFF"}); //40% shadow
    // Set z-index of Safad_fence to be higher than the others
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
	if(fence !== Safad_fence) {
           fence.setOptions({ zIndex: 0 });
    	}
    });
});
// Add mouseout listener to revert fillColor
Safad_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#32CF32"});
    this.setOptions({strokeColor: "#32CF32"});
});



Ramla_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#32AA32"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Ramla_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Ramla_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#32CF32"});
    this.setOptions({strokeColor: "#32CF32"});
});



Nablus_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#32AA32"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Nablus_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Nablus_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#32CF32"});
    this.setOptions({strokeColor: "#32CF32"});
});


Haifa_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#32AA32"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Haifa_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Haifa_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#32CF32"});
    this.setOptions({strokeColor: "#32CF32"});
});


Bisan_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#32AA32"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Bisan_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Bisan_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#32CF32"});
    this.setOptions({strokeColor: "#32CF32"});
});


Beersheba_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#32AA32"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Beersheba_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Beersheba_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#32CF32"});
    this.setOptions({strokeColor: "#32CF32"});
});



Akka_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#EE9900"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Akka_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Akka_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#EEBB00"});
    this.setOptions({strokeColor: "#EEBB00"});
});

Tulkarm_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#EE9900"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Tulkarm_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Tulkarm_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#EEBB00"});
    this.setOptions({strokeColor: "#EEBB00"});
});

Jericho_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#EE9900"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Jericho_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Jericho_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#EEBB00"});
    this.setOptions({strokeColor: "#EEBB00"});
});

Hebron_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#EE9900"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Hebron_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Hebron_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#EEBB00"});
    this.setOptions({strokeColor: "#EEBB00"});
});

Lod_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#EE9900"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Lod_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Lod_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#EEBB00"});
    this.setOptions({strokeColor: "#EEBB00"});
});



Jenin_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#3377BB"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Jenin_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Jenin_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#3399CC"});
    this.setOptions({strokeColor: "#3399CC"});
});

Salfit_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#3377BB"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Salfit_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Salfit_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#3399CC"});
    this.setOptions({strokeColor: "#3399CC"});
});

Gaza_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#3377BB"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Gaza_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Gaza_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#3399CC"});
    this.setOptions({strokeColor: "#3399CC"});
});



Alnasra_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#959585"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Alnasra_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Alnasra_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#A9A9A9"});
    this.setOptions({strokeColor: "#A9A9A9"});
});

Qalqilya_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#959585"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Qalqilya_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Qalqilya_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#A9A9A9"});
    this.setOptions({strokeColor: "#A9A9A9"});
});

Jerusalem_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#959585"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Jerusalem_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Jerusalem_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#A9A9A9"});
    this.setOptions({strokeColor: "#A9A9A9"});
});



Tiberias_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#BA4000"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Tiberias_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Tiberias_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#D84315"});
    this.setOptions({strokeColor: "#D84315"});
});

Tubas_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#BA4000"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Tubas_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Tubas_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#D84315"});
    this.setOptions({strokeColor: "#D84315"});
});

Yaffa_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#BA4000"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Yaffa_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Yaffa_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#D84315"});
    this.setOptions({strokeColor: "#D84315"});
});

Ramallah_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#BA4000"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Ramallah_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Ramallah_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#D84315"});
    this.setOptions({strokeColor: "#D84315"});
});



Bethlehem_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#578A3A"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Bethlehem_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Bethlehem_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#589E3E"});
    this.setOptions({strokeColor: "#589E3E"});
});



Deadsea_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#1e80EE"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Deadsea_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Deadsea_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#1e90ff"});
    this.setOptions({strokeColor: "#1e90ff"});
});



Bahriatabria_fence.addListener('mouseover', function() {
    this.setOptions({fillColor: "#1e80EE"});
    this.setOptions({strokeColor: "#FFF"});
    this.setOptions({ zIndex: 1 });

    fences.forEach(function(fence) {
    if(fence !== Bahriatabria_fence) {
           fence.setOptions({ zIndex: 0 });
        }
    });
});
Bahriatabria_fence.addListener('mouseout', function() {
    this.setOptions({fillColor: "#1e90ff"});
    this.setOptions({strokeColor: "#1e90ff"});
});