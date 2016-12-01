from uuid import uuid4
from django.db import models

# Create your models here.


class Cliente(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    nombre = models.CharField(max_length=60, null=True, blank=True)
    apellidoP= models.CharField(max_length=60, null=True, blank=True)
    apellidoM= models.CharField(max_length=60, null=True, blank=True)
    cell= models.CharField(max_length=60, null=True, blank=True)
    tipoVenta= models.CharField(max_length=60, null=True, blank=True)
    fecha= models.CharField(max_length=60, null=True, blank=True)

    class Meta:
        verbose_name = "cliente"
        verbose_name_plural = "clientes"
        permissions = (
            ('list_cliente', 'Can list cliente'),
            ('get_cliente', 'Can get cliente'),
        )

    def __str__(self):
        return self.nombre
