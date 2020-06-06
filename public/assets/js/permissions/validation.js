$(document).ready(function () {

    function reset() {
        $("#toggleCSS").attr("href", "alertify.default.css");

        alertify.set({
            labels: {
                ok: "Sim",
                cancel: "Não"
            },
            delay: 5000,
            buttonReverse: true,
            buttonFocus: "ok"
        });
    }

    $('#formRegister').each(function () {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                    maxlength: 60,
                },

                label: {
                    required: true,
                    minlength: 3,
                    maxlength: 200,
                },

            },

            errorPlacement: function(error, element) {
                error.insertBefore(element);
            },


            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element.form).find("label[for=" + element.id + "]")
                    .addClass(errorClass);
            },

            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element.form).find("label[for=" + element.id + "]")
                    .removeClass(errorClass);
            },

            submitHandler: function (form) {
                form.submit();
            }
        })

    });


    //deleta registro mestre
    $('.j_delete').on('click', function (e) {
        e.preventDefault();

        reset();

        alertify.confirm("Deseja excluir o registro selecionado?", function (e) {
            if (e) {
                $('#formDelete').submit();
            }

        })
    })


});