(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {
                var nodes = document.querySelectorAll('.fbUserContent, .userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4, ._4-u2');
                for (var i = 0, n = nodes.length; i < n; i++)
                {
                    var text = nodes[i] ? nodes[i].textContent.toLowerCase() : '';
                    if (text && text.indexOf('got') >= 0 && nodes[i].style.display != 'none')
                    {
                        nodes[i].style.display = 'none';
                    }
                    else if (text && text.indexOf('game of thrones') >= 0 && nodes[i].style.display != 'none')
                    {
                        nodes[i].style.display = 'none';
                    }
                    else if (text && text.indexOf('gameofthrones') >= 0 && nodes[i].style.display != 'none')
                    {
                        nodes[i].style.display = 'none';
                    }
                }

            }
        });
});

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });
})();

