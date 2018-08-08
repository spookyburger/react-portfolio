insert into passhash (user_handle, passhash) values
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', 'MyHardToGuessPassword')
on conflict do nothing;
