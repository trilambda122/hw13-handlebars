$(document).ready(function() {
    console.log("in the docutment");
    $('#newBugerBtn').on('click', function(event) {
        event.preventDefault();
        console.log('new burger --> BUTTON CLICKED');

        const newBurger = {
            burger_name: $('#newBurgerText').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        })

    });
    // $('.change-state').on('click', function(event) {
    //     event.preventDefault();
    //     console.log('knife and fork clicked');
    //     console.log(event);

    // });

    $(function() {
        $(".change-burger").on("click", function(event) {
            event.preventDefault();
            console.log("BUTTON CLICKED!!");
            var id = $(this).data("id");
            var newBurger = $(this).data("burgerstate");
            if (newBurger === 1) {
                var newBurgerState = {
                    devoured: 0
                };
            }
            if (newBurger === 0) {
                var newBurgerState = {
                    devoured: 1
                };
            }


            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newBurgerState
            }).then(
                function() {
                    console.log("changed burgerto", newBurgerState);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/cats/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted the burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});