$(function(){

    function parallaxIt(e, parent, target, movement) {
        var $this = $(parent);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }

    //countdown
    var ts = new Date(2020, 9, 4, 17, 30);

	$('#countdown-timer').countdown({
		timestamp : ts,
		callback : function(days, hours, minutes, seconds){
		}
    });

    //efeito btn primary secondary
    $('.col-2 .box-2 .btn-primary, .col-2 .box-2 .btn-secondary').mouseenter(function(){
        $(this).parent().toggleClass('animation');
    });

    //scrollmagic
    function animations(){

        var controller = new ScrollMagic.Controller();
    
        var scene1 = new ScrollMagic
            .Scene({triggerElement: "#header", duration: 800, offset: 500})
            .setTween("#countdown", {
                opacity: 1,
                y: 0
            })
            // .addIndicators({name: "opacity #countdown"})
            .addTo(controller);
    
        var sceneDays = new ScrollMagic
            .Scene({triggerElement: "#header", duration: 300, offset: 500})
            .setTween("#countdown .countDays", {
                opacity: 1,
                y: 0
            })
            // .addIndicators({name: "Days"})
            .addTo(controller);
    
        var sceneHours = new ScrollMagic
            .Scene({triggerElement: "#header", duration: 300, offset: 650})
            .setTween("#countdown .countHours", {
                opacity: 1,
                y: 0
            })
            // .addIndicators({name: "Hours"})
            .addTo(controller);
    
        var sceneMinutes = new ScrollMagic
            .Scene({triggerElement: "#header", duration: 300, offset: 800})
            .setTween("#countdown .countMinutes", {
                opacity: 1,
                y: 0
            })
            // .addIndicators({name: "Minutes"})
            .addTo(controller);
    
        var sceneSeconds = new ScrollMagic
            .Scene({triggerElement: "#header", duration: 300, offset: 950})
            .setTween("#countdown .countSeconds", {
                opacity: 1,
                y: 0
            })
            // .addIndicators({name: "Seconds"})
            .addTo(controller);
    
        var scene2 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500})
            .setTween("#party", {
                opacity: 1
            })
            // .addIndicators({name: "opacity #party"})
            .addTo(controller);
    
        var scene25 = new ScrollMagic.Scene({triggerElement: "#party", duration: 290})
            .setTween("#party .left", {
                x: 0
            })
            // .addIndicators({name: "#party left"})
            .addTo(controller);
    
        var scene3 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500, offset: 300})
            .setTween("#party .col-2 .box-1", {
                opacity: 1,
                y: 0
            })
            // .addIndicators({name: "col2 box1"})
            .addTo(controller);
    
        var scene4 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500, offset: 300})
            .setTween("#party .col-2 .box-2", {
                opacity: 1,
                x: 0
            })
            // .addIndicators({name: "col2 box2"})
            .addTo(controller);
    
        var scene5 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500, offset: 300})
            .setTween("#party .col-1 .box-1", {
                opacity: 1,
                x: 0
            })
            // .addIndicators({name: "col1 box1"})
            .addTo(controller);
    
        var scene6 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500, offset: 300})
            .setTween("#party .col-1 .box-2", {
                opacity: 1,
                y: 0
            })
            // .addIndicators({name: "col1 box2"})
            .addTo(controller);
    
        var scene7 = new ScrollMagic.Scene({triggerElement: "#party", duration: 800, offset: 315})
            .setPin("#party")
            // .addIndicators({name: "pin party"})
            .addTo(controller);
    
        var sceneTestimonials = new ScrollMagic.Scene({triggerElement: "#testimonials", duration: 800, offset: -300})
            .setTween("#testimonials", {
                opacity: 1
            })
            // .addIndicators({name: "testimonials plant 1"})
            .addTo(controller);
    
        var scene8 = new ScrollMagic.Scene({triggerElement: "#testimonials", duration: 800, offset: -300})
            .setTween("#testimonials .bg-element-1", {
                y: 10,
                rotation: 10
            })
            // .addIndicators({name: "testimonials plant 1"})
            .addTo(controller);
    
        var scene9 = new ScrollMagic.Scene({triggerElement: "#testimonials", duration: 1200, offset: -300})
            .setTween("#testimonials .bg-element-2", {
                y: -100,
                rotation: -10
            })
            // .addIndicators({name: "testimonials plant 2"})
            .addTo(controller);
    
        var scene10 = new ScrollMagic.Scene({triggerElement: "#gifts", duration: 500, offset: -300})
            .setTween("#gifts .left", {
                opacity: 1,
                x: 0,
                paddingLeft: 215
            })
            // .addIndicators({name: "gifts left"})
            .addTo(controller);
    
        var scene10Confetti = new ScrollMagic.Scene({triggerElement: "#gifts", duration: 500, offset: -100})
            .setTween("#gifts .confetti", {
                opacity: 0.2,
                scale: 1
            })
            // .addIndicators({name: "gifts confetti"})
            .addTo(controller);
    
        var scene11 = new ScrollMagic.Scene({triggerElement: "#gifts", duration: 500, offset: -300})
            .setTween("#gifts .right", {
                opacity: 1,
                x: 0
            })
            // .addIndicators({name: "gifts right"})
            .addTo(controller);
    
        var scenePinRsvp = new ScrollMagic.Scene({triggerElement: "#rsvp", duration: 1000, offset: 280})
            .setPin("#rsvp")
            // .addIndicators({name: "pin rsvp"})
            .addTo(controller);
    
        var scene12 = new ScrollMagic.Scene({triggerElement: "#rsvp", duration: 1000, offset: 0})
            .setTween("#rsvp .photo-1", {
                opacity: 1,
                y: 0,
                rotationX: 0,
            })
            // .addIndicators({name: "rsvp photo 1"})
            .addTo(controller);
    
        var scene13 = new ScrollMagic.Scene({triggerElement: "#rsvp", duration: 1000, offset: 300})
            .setTween("#rsvp .photo-2", {
                opacity: 1,
                y: 0,
                rotationX: 0,
            })
            // .addIndicators({name: "rsvp photo 2"})
            .addTo(controller);
    
        var scene14 = new ScrollMagic.Scene({triggerElement: "#rsvp", duration: 1000, offset: 600})
            .setTween("#rsvp .photo-3", {
                opacity: 1,
                y: 0,
                rotationX: 0,
            })
            // .addIndicators({name: "rsvp photo 3"})
            .addTo(controller);
    
        var scene15 = new ScrollMagic.Scene({triggerElement: "#rsvp", duration: 500, offset: 1300})
            .setTween("#rsvp .box", {
                opacity: 1,
            })
            // .addIndicators({name: "rsvp box"})
            .addTo(controller);
    }

    //depoimentos
    const regex = /^(.)|\s+(.)|'+(.)/g;
    String.prototype.capitalizeNames = function () {
        capitalized = [];
        nomeArray = this.ucwords().split(" ");
        articleAndPrepositions = ["El", "La", "Le", "Les", "Los", "Os", "A","As", "E", "Da","De","Di","Do","Du","Das","Dos","Deu","Der","Van","Von", "Bin", "Della"];
        nomeArray.forEach(function(nome){
            if(articleAndPrepositions.indexOf(nome)!= -1){nome = nome.toLowerCase();}
            capitalized.push(nome);
        });
        return capitalized.join(" ");
    };
    String.prototype.ucwords=function(){return(this.toLowerCase()).replace(regex,function($1){return $1.toUpperCase();});};
    String.prototype.capitalize = function(){return this.charAt(0).toUpperCase() + this.slice(1);};

    var urlDepoimentos = 'https://sites.icasei.com.br/services/template_msg_noivo?id_noivo=688183';

    $.getJSON(urlDepoimentos, function(data) {
        var items = [];

        $.each(data, function(key, val) {
            if(val.aprovada) {
                items.push('<div class="swiper-slide" id="' + key + '">\
                    <div class="msg">' + val.mensagem + '</div>\
                    <div class="author">' + val.nome.toLowerCase().capitalizeNames().replace(' E ', ' e ').replace('Jose', 'José').replace('Joao', 'João') + '</div>\
                    <div class="date">' + val.data + '</div>\
                </div>');
            }
        });

        $("#testimonials .swiper-wrapper").html(items.join(""));

        //swiper
        var testimonialsSwiper = new Swiper('#testimonials .swiper-container', {
            navigation: {
              nextEl: '#testimonials .arrow-right',
              prevEl: '#testimonials .arrow-left',
            },
            effect: 'cube',
            cubeEffect: {
                shadow: false,
                slideShadows: false,
            },
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            autoplay: {
                delay: 5000,
            },
            loop: true,
            breakpoints: {
                1000: {
                    loop: false,
                    effect: 'fade',
                },
            }
        });
    });

    //get captcha
    var urlCaptcha = 'https://sites.icasei.com.br/services/captcha?object=message';

    function getCaptcha(){
        $.getJSON(urlCaptcha, function(data) {
            $('#captcha_key').val(data.key)
            $('#captcha').attr('src', 'https://sites.icasei.com.br/' + data.image);
        });
    }

    getCaptcha();

    //modal
    $('.modal').click(function(event){
        if (!$(event.target).closest('.modal-container').length) {
            $(this).removeClass('active');
        }
    });

    $('.modal-close').click(function(){
        $(this).parents('.modal').removeClass('active');
    });

    $('#testimonials .reply').click(function(){
        $('.modal-testimonials').addClass('active');
    });

    //envio form
    $('#form-testimonials').validate({
        rules: {
            nome: {
                required: true,
                nomeCompleto: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 2,
                email: true,
            },
            mensagem: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            nome: {
                minlength: "Nome inválido",
            },
            email: {
                minlength: "E-mail inválido",
            },
            mensagem: {
                minlength: "Mensagem inválida",
            },
        },
        submitHandler: function (form) {
            var errorList = $(form).find('.error-list');

            $.ajax({
                url: urlDepoimentos,
                type: 'post',
                data: $(form).serialize()
            })
            .done(function(data) {
                form.reset();
                errorList.html('');
                $(form).parents('.modal').removeClass('active');

                if(data.created != '') {
                    $('.modal-testimonials-thank').addClass('active');
                }
            })
            .fail(function($xhr) {
                var data = $xhr.responseJSON;
                var items = [];

                $.each(data.errors, function(index, item){
                    items.push('<strong>' + item.key.toLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() }) + ': </strong>' + item.value);
                });

                errorList.html(items.join(""));
                getCaptcha();
            });
        }
    });

    //rsvp
    var urlParams = new URLSearchParams(window.location.search),
        codigoUrlRsvp = urlParams.get('rsvp');
        urlRsvp = 'https://sites.icasei.com.br/services/template_rsvp_convidado',
        rsvpData = '',
        rsvpEtapa = 1;


    if(codigoUrlRsvp != "") {
        $('#codigo_convidado').val(codigoUrlRsvp);
    }

    $('#form-rsvp').validate({
        rules: {
            codigo_convidado: {
                required: true,
                remote: {
                    url: urlRsvp,
                    type: 'get',
                    data: {
                        'id_noivo': 688183,
                        'nome': function() {
                            return $('#codigo_convidado').val();
                        }
                    },
                    dataType: 'json',
                    dataFilter: function(data) {
                        var json = JSON.parse(data);
                        if(json.error == 1) {
                            return "\"Não encontramos na lista, verifique se digitou corretamente ou recarregue a página e tente novamente.\"";
                        }
                        return true;
                    }
                }
            },
        },
        messages: {
            codigo_convidado: {
                remote: 'Código inválido',
            },
            email: {
                email: 'E-mail inválido'
            },
            telefone: {
                minlength: 'Número inválido'
            }
        },
        submitHandler: function (form) {
            if(rsvpEtapa == 1) {
                $.getJSON(urlRsvp, {nome: $('#codigo_convidado').val(), id_noivo: 688183})
                    .done(function(json) {
                        rsvpData = json;
                        console.log(rsvpData)
                        $('.input-group.etapa-2').stop().slideDown({
                            start: function () {
                              $(this).css({
                                display: "flex"
                              })
                            }
                          });

                        $('.input-group.etapa-1').stop().slideUp();
                        $('#form-rsvp button').addClass('enviar').html('Enviar');

                        for (i = 1; i <= rsvpData.acompanhantes; i++) {
                            $('#qtd_pessoas option').eq(i).removeAttr('hidden');
                        }

                        rsvpEtapa = 2;
                    });
            } else {
                var errorList = $(form).find('.error-list');

                var tel = $('#telefone').val().split(' '),
                    ddd = tel[0].replace('(', '').replace(')', ''),
                    celular = tel[1].replace(' ', '').replace('-', '');

                $.ajax({
                    url: 'https://sites.icasei.com.br/services/template_rsvp',
                    type: 'post',
                    data: {
                        "id_noivo": 688183,
                        "evento": $('#evento').val(),
                        "qtd_pessoas": $('#qtd_pessoas').val() || 1,
                        "criancas": $('#criancas').val(),
                        "convidado": 'noiva',
                        "email": $('#email_convidado').val(),
                        "ddd": ddd,
                        "telefone": celular,
                        "acompanhantes": "adasdas\nasd\nasd\nasd\nsa\ndsa\ndas\ndsa\ndsa\ndsa\nd\nas",
                        "id_convidado": rsvpData.id_convidado
                    }
                })
                .done(function(data) {
                    form.reset();
                    errorList.html('');
                    $(form).parents('.modal').removeClass('active');

                    if(data.created != '') {
                        $('.modal-rsvp-sent').addClass('active');
                    }
                })
                .fail(function($xhr) {
                    var data = $xhr.responseJSON;
                    var items = [];

                    $.each(data.errors, function(index, item){
                        items.push('<strong>' + item.key.toLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() }) + ': </strong>' + item.value);
                    });

                    errorList.html(items.join(""));
                });
            }
        }
    });

    //oculta campos caso nao va ao evento
    $('#evento').change(function(){
        if(this.value == 'Não') {
            $('.input-group.adultos, .input-group.criancas').stop().slideUp();
        } else {
            $('.input-group.adultos, .input-group.criancas').stop().slideDown();
        }
    });

    $('#qtd_pessoas').change(function(){
        var qtd = this.value;
        $('.acompanhantes').html('');

        for (i = 1; i <= qtd; i++) {
            $('.acompanhantes').append('<input type="text" placeholder="Nome do adulto ' + i + '" required />');
        }
    });

    //mask
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
      },
      spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
          }
      };

    $('#telefone').mask(SPMaskBehavior, spOptions);

    //select2
    $("select").select2({
        minimumResultsForSearch: Infinity
    });

    //parallax header
    if(window.innerWidth >= 1000) {
        $("#header").mousemove(function(e) {
            parallaxIt(e, ".bg-wrapper", ".bg", -30);
        });

        animations();
    }
});

// window.onload = function(){
// 	SmoothScroll({
//         stepSize: 25,
//     });
// }