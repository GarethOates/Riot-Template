<like-component>
    <i class="glyphicon glyphicon-heart {liked: isLiked}"
    onclick={clicked}>
    </i> <span>{noOfLikes}</span>

    <script>
    this.noOfLikes = this.opts.noOfLikes;
    this.isLiked = this.opts.isLiked;

    this.clicked = function() {
        this.isLiked = !this.isLiked;
        this.noOfLikes += this.isLiked ? 1 : -1;

        this.trigger(
            'like',
            {
                noOfLikes: this.noOfLikes,
                isLiked: this.isLiked
            }
        );
    }

    </script>

</like-component>
