session_set_cookie_params(0);
session_start();
<?php if(isset($_SESSION['data'])){ ?>
    <?php foreach ($_SESSION["data"] as $value){ ?>
        <tr class="table-row">
            <td><?php echo $value[0] ?></td>
            <td><?php echo $value[1] ?></td>
            <td><?php echo $value[2] ?></td>
            <td><?php echo $value[3] ?></td>
            <td><?php echo $value[4] ?> ms</td>
            <?php echo $value[5] ?> </td>
        </tr>
    <?php } ?>
<?php } ?>