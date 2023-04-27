
INSERT INTO user ( login_user, password_user, fname_user)
VALUES ("boy", "123456", "Pekka");

select * from user;

INSERT INTO data ( user_id)
VALUES (1);

select * from data;

SELECT
  data.id_data,
  user.login_user
FROM data
JOIN user
  ON user.id_user=data.user_id;