 .. _content_custom_types:

Custom Content Types
--------------------

Custom Content Types can be created using Java or simple xml files - and deployed through applications.

When using xml, each content type must have a separate folder in the application resource structure.
i.e. ``site/content-types/<my-content-type-name>``.

Each folder must then hold a file with the name of the content type and ``.xml`` extension (e.g. ``my-content-type-name.xml``).

This is the basic structure of a ``content-type.xml`` file:

.. literalinclude:: code/content-type.xml
  :language: xml

display-name
  The display name of the content type is used throughout the admin console
  to recognize it. But the technical name is the name of the folder the file is placed in.

display-name\@i18n
  The key to look up the display-name text in the localization bundles. (See also :ref:`localization_schemas`)

super-type
  Many properties are inherited from the super-type. All custom content types
  must either inherit ``base:structured`` directly or indirectly. The icon and the general
  form to edit the fields of the content are important properties that are inherited from ``base:structured``.

is-abstract
  If a content type is abstract, no content of this type may be instantiated. It may still be used as
  a super type for other content types.

is-final
  Final content types may not be used as super types of other content types.

allow-child-content
  Default is true, which allows nodes to be added in the tree below a content of this type.

form
  Fields in the content type are defined as input elements which are placed inside
  the ``form`` element. All legal input types are described below.

input
  ``name`` and ``type`` are mandatory attributes of the input element.
  ``label`` and  ``occurrences`` are mandatory child elements.

config
  Some input types have a complex configuration that is defined inside a
  ``config`` element. It is mandatory for the content types that need it.

display-name-expression
  Display name of a content can be auto-generated based on input values from the form, including values that are added through a mixin.
  ``${fieldName}`` will be replaced with value of the input with name ``fieldName``. You can combine hardcoded text with dynamic values, for example
  ``User ${firstName} ${lastName}``.

.. TIP::

  A content type may optionally have its own specific icon. The icon can be assigned to the content type by adding a PNG or SVG file with
  the same name, in the content type folder, e.g. ``site/content-types/my-content-type-name/my-content-type-name.svg``
