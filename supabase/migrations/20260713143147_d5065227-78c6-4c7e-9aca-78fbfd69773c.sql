DELETE FROM public.messages WHERE conversation_id IN (SELECT id FROM public.conversations WHERE session_id IN ('debug_test_role_simulation','debug_verify_test'));
DELETE FROM public.conversations WHERE session_id IN ('debug_test_role_simulation','debug_verify_test');
DROP TABLE IF EXISTS public._debug_rls_test;