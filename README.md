Search Krumo
============

Search Krumo extends the devel module by adding search capability to dpm() 
function.

You can search for keys or values. You can also copy the path to an item 
in an array/object.

Example: $variables['page']->node->nid

To fully use this function use sdpm() instead of dpm().
This will add the variable name that you have put into sdpm().
This way it is only copy and paste, the best for hard working/lazy programmers!

Installation
------------

- Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules.

- Place `sdpm($variable);` to output variable's content. 

- View or search variable.

Issues
------

Bugs and Feature requests should be reported in the Issue Queue:
https://github.com/backdrop-contrib/search_krumo/issues.

Current Maintainers
-------------------

- Alex Shapka (https://github.com/AlexShapka).

Credits
-------

- Ported to Backdrop CMS by Alex Shapka (https://github.com/AlexShapka).
- Originally written for Drupal by Bram ten Hove (https://github.com/bramtenhove).

License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.
