<tr class="table-header">
    <th scope="col">X</th>
    <th scope="col">Y</th>
    <th scope="col">R</th>
    <th scope="col">Текущее время</th>
    <th scope="col">Время исполнения</th>
    <th scope="col">Результат попадания</th>
</tr>

<?php foreach ($_SESSION["data"] as $value){ ?>
    <tr class="table-header">
        <td><?php echo $value[0] ?></td>
        <td><?php echo $value[1] ?></td>
        <td><?php echo $value[2] ?></td>
        <td><?php echo $value[3] ?></td>
        <td><?php echo $value[4] ?> ms</td>
        <td><?php echo $value[5] ?></td>
    </tr>
<?php } ?>